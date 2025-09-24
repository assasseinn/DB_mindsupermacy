// @deno-types="https://deno.land/std@0.168.0/http/server.ts"
// @deno-types="https://deno.land/std@0.177.0/http/server.ts"
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
// @deno-types="https://esm.sh/@supabase/supabase-js@2.38.4"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Environment configuration
const ENV = Deno.env.get('ENVIRONMENT') || 'sandbox'; // 'production' or 'sandbox'
const CASHFREE_APP_ID = Deno.env.get('CASHFREE_APP_ID');
const CASHFREE_SECRET_KEY = Deno.env.get('CASHFREE_SECRET_KEY');
const FRONTEND_URL = Deno.env.get('FRONTEND_URL') || 'http://localhost:5174';
const WEBHOOK_SECRET = Deno.env.get('CASHFREE_WEBHOOK_SECRET');

// API endpoints based on environment
const CASHFREE_BASE_URL = ENV === 'production' 
  ? 'https://api.cashfree.com/pg' 
  : 'https://sandbox.cashfree.com/pg';

// Validate required environment variables
function validateEnvironment() {
  const missing = [];
  if (!CASHFREE_APP_ID) missing.push('CASHFREE_APP_ID');
  if (!CASHFREE_SECRET_KEY) missing.push('CASHFREE_SECRET_KEY');
  if (ENV === 'production' && !WEBHOOK_SECRET) missing.push('CASHFREE_WEBHOOK_SECRET');
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

// Verify webhook signature using Web Crypto API
async function verifyWebhookSignature(payload: string, signature: string, secret: string): Promise<boolean> {
  if (!secret || !signature) return false;
  
  try {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    
    const signatureBuffer = await crypto.subtle.sign(
      'HMAC',
      key,
      encoder.encode(payload)
    );
    
    const expectedSignature = Array.from(new Uint8Array(signatureBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
    
    return signature === expectedSignature;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    log('error', 'Webhook signature verification failed', { error: errorMessage });
    return false;
  }
}

// Enhanced logging function
function log(level: 'info' | 'error' | 'warn', message: string, data?: any) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level,
    message,
    environment: ENV,
    ...(data && { data })
  };
  console.log(JSON.stringify(logEntry));
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Validate environment variables on startup
    validateEnvironment();
    
    log('info', `Processing ${req.method} request to ${req.url}`);
    
    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Handle Cashfree order creation
    if (req.url.endsWith('/send-payment-confirmation')) {
      const { amount, currency, customer_details } = await req.json()
      
      log('info', 'Creating Cashfree order', { amount, currency, customer_email: customer_details.customer_email });
      
      // Create order with Cashfree
      const orderData = {
        order_id: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        order_amount: amount / 100, // Convert paise to rupees for Cashfree
        order_currency: currency,
        customer_details: customer_details,
        order_meta: {
          return_url: `${FRONTEND_URL}/payment-success`,
          notify_url: `${Deno.env.get('SUPABASE_URL')}/functions/v1/send-payment-confirmation/webhook`
        }
      }

      // Call Cashfree API to create order
      const cashfreeResponse = await fetch(`${CASHFREE_BASE_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-version': '2023-08-01',
          'x-client-id': CASHFREE_APP_ID ?? '',
          'x-client-secret': CASHFREE_SECRET_KEY ?? ''
        },
        body: JSON.stringify(orderData)
      })

      if (!cashfreeResponse.ok) {
        const errorData = await cashfreeResponse.json()
        log('error', 'Cashfree API error', { status: cashfreeResponse.status, error: errorData });
        throw new Error(`Failed to create order with Cashfree: ${errorData.message || 'Unknown error'}`);
      }

      const cashfreeOrder = await cashfreeResponse.json()
      log('info', 'Cashfree order created successfully', { order_id: cashfreeOrder.order_id });
      
      // Save order to database
      const { error: orderError } = await supabaseClient
        .from('orders')
        .insert([
          {
            cashfree_order_id: cashfreeOrder.order_id,
            amount: amount, // Store in paise
            currency: currency,
            status: 'created',
            user_email: customer_details.customer_email,
            customer_name: customer_details.customer_name
          }
        ])
        .select()
        .single()

      if (orderError) {
        log('error', 'Database error saving order', { error: orderError });
        throw orderError;
      }

      // Return the order data with payment session
      return new Response(
        JSON.stringify({
          order_id: cashfreeOrder.order_id,
          order_amount: cashfreeOrder.order_amount,
          currency: cashfreeOrder.order_currency,
          payment_session_id: cashfreeOrder.payment_session_id
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Handle payment verification
    if (req.url.endsWith('/verify')) {
      const { order_id, user_email, amount } = await req.json()
      
      log('info', 'Verifying payment', { order_id, user_email });
      
      // Verify payment with Cashfree
      const verifyResponse = await fetch(`${CASHFREE_BASE_URL}/orders/${order_id}/payments`, {
        method: 'GET',
        headers: {
          'x-api-version': '2023-08-01',
          'x-client-id': CASHFREE_APP_ID ?? '',
          'x-client-secret': CASHFREE_SECRET_KEY ?? ''
        }
      })

      if (!verifyResponse.ok) {
        log('error', 'Payment verification failed', { order_id, status: verifyResponse.status });
        throw new Error('Payment verification failed');
      }

      const verifyData = await verifyResponse.json()
      const isPaymentSuccess = verifyData.some((payment: any) => payment.payment_status === 'SUCCESS')

      if (!isPaymentSuccess) {
        log('warn', 'Payment not successful', { order_id, verifyData });
        throw new Error('Payment not successful');
      }

      log('info', 'Payment verified successfully', { order_id });

      // Update order status
      const { error: updateError } = await supabaseClient
        .from('orders')
        .update({ 
          status: 'completed',
          user_email: user_email
        })
        .eq('cashfree_order_id', order_id)

      if (updateError) {
        log('error', 'Database error updating order', { error: updateError });
        throw updateError;
      }

      // Send confirmation email
      const { error: emailError } = await supabaseClient.functions.invoke('send-email', {
        body: {
          to: user_email,
          subject: 'Payment Confirmation - MindSupremacy',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #B38D4D;">Payment Successful!</h2>
              <p>Thank you for your purchase. Your payment has been confirmed.</p>
              <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Order ID:</strong> ${order_id}</p>
                <p><strong>Amount:</strong> ₹${(amount / 100).toFixed(2)}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
              </div>
              <p>You can now access your course content by logging into your account.</p>
              <p>If you have any questions, please don't hesitate to contact our support team.</p>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 12px;">This is an automated message, please do not reply.</p>
              </div>
            </div>
          `
        }
      })

      if (emailError) {
        log('warn', 'Email sending failed', { error: emailError });
        // Don't throw error for email failure as payment is already processed
      }

      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Handle webhook notifications from Cashfree
    if (req.url.endsWith('/webhook')) {
      log('info', 'Received webhook from Cashfree');
      
      const body = await req.text();
      const signature = req.headers.get('x-webhook-signature') || '';
      
      // Verify webhook signature in production
      if (ENV === 'production' && WEBHOOK_SECRET) {
        const isValidSignature = await verifyWebhookSignature(body, signature, WEBHOOK_SECRET);
        if (!isValidSignature) {
          log('error', 'Invalid webhook signature');
          return new Response('Invalid signature', { status: 401 });
        }
      }
      
      try {
        const webhookData = JSON.parse(body);
        log('info', 'Processing webhook', { type: webhookData.type, order_id: webhookData.data?.order?.order_id });
        
        // Handle different webhook events
        if (webhookData.type === 'PAYMENT_SUCCESS_WEBHOOK') {
          const orderData = webhookData.data.order;
          const paymentData = webhookData.data.payment;
          
          // Update order status
          const { error: updateError } = await supabaseClient
            .from('orders')
            .update({ status: 'completed' })
            .eq('cashfree_order_id', orderData.order_id);
            
          if (updateError) {
            log('error', 'Failed to update order from webhook', { error: updateError });
          }
          
          // Save payment record
          const { error: paymentError } = await supabaseClient
            .from('payments')
            .insert([
              {
                cashfree_order_id: orderData.order_id,
                cashfree_payment_id: paymentData.cf_payment_id,
                amount: orderData.order_amount * 100, // Convert to paise
                user_email: orderData.customer_details.customer_email,
                status: 'success'
              }
            ])
            .select()
            .single();
            
          if (paymentError) {
            log('error', 'Failed to save payment from webhook', { error: paymentError });
          }
        }
        
        return new Response('OK', { status: 200 });
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        log('error', 'Webhook processing failed', { error: errorMessage });
        return new Response('Internal Server Error', { status: 500 });
      }
    }

    // If no matching endpoint, return 404
    return new Response(
      JSON.stringify({ error: 'Endpoint not found' }),
      { 
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
}) 