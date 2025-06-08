// @deno-types="https://deno.land/std@0.168.0/http/server.ts"
// @deno-types="https://deno.land/std@0.177.0/http/server.ts"
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
// @deno-types="https://esm.sh/@supabase/supabase-js@2.38.4"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Handle order creation
    if (req.url.endsWith('/send-payment-confirmation')) {
      const { amount, currency, receipt } = await req.json()
      
      // Create a new order in the database
      const { data: order, error: orderError } = await supabaseClient
        .from('orders')
        .insert([
          {
            amount,
            currency,
            receipt,
            status: 'created'
          }
        ])
        .select()
        .single()

      if (orderError) throw orderError

      // Return the order data for Razorpay
      return new Response(
        JSON.stringify({
          id: order.id,
          amount: order.amount,
          currency: order.currency,
          receipt: order.receipt
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Handle payment confirmation
    if (req.url.endsWith('/payment/verify')) {
      const { email, amount, order_id, razorpay_payment_id, razorpay_order_id } = await req.json()
      
      // Update order status
      const { error: updateError } = await supabaseClient
        .from('orders')
        .update({ 
          status: 'completed',
          payment_id: razorpay_payment_id,
          razorpay_order_id: razorpay_order_id,
          user_email: email
        })
        .eq('id', order_id)

      if (updateError) throw updateError

      // Send confirmation email
      const { error: emailError } = await supabaseClient.functions.invoke('send-email', {
        body: {
          to: email,
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

      if (emailError) throw emailError

      return new Response(
        JSON.stringify({ success: true }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
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