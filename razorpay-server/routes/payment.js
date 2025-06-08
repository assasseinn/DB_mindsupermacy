require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Validation middleware
const validateOrder = [
  body('amount').isInt({ min: 100 }).withMessage('Amount must be at least 1 INR'),
  body('currency').optional().isIn(['INR']).withMessage('Only INR currency is supported'),
  body('receipt').optional().isString().withMessage('Receipt must be a string')
];

const validateVerification = [
  body('razorpay_payment_id').isString().notEmpty().withMessage('Payment ID is required'),
  body('razorpay_order_id').isString().notEmpty().withMessage('Order ID is required'),
  body('razorpay_signature').isString().notEmpty().withMessage('Signature is required'),
  body('user_email').isEmail().withMessage('Valid email is required'),
  body('amount').isInt({ min: 100 }).withMessage('Amount must be at least 1 INR')
];

// Create Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// Create order
router.post("/orders", validateOrder, async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { amount, currency = 'INR', receipt } = req.body;

    // Log order creation attempt
    console.log(`Creating order for amount: ${amount} ${currency}`);

    const options = {
      amount,
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      notes: {
        created_at: new Date().toISOString()
      }
    };

    const order = await razorpay.orders.create(options);

    if (!order) {
      throw new Error('Failed to create order');
    }

    // Log successful order creation
    console.log(`Order created successfully: ${order.id}`);

    res.json(order);
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({
      error: 'Failed to create order',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// Verify payment
router.post("/verify", validateVerification, async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      user_email,
      amount
    } = req.body;

    // Log verification attempt
    console.log(`Verifying payment: ${razorpay_payment_id} for order: ${razorpay_order_id}`);

    // Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      console.error('Invalid signature for payment:', razorpay_payment_id);
      return res.status(400).json({
        error: 'Invalid signature',
        message: 'Payment verification failed'
      });
    }

    // Verify order amount
    try {
      const order = await razorpay.orders.fetch(razorpay_order_id);
      if (order.amount !== amount) {
        console.error('Amount mismatch for payment:', razorpay_payment_id);
        return res.status(400).json({
          error: 'Amount mismatch',
          message: 'Payment amount does not match order amount'
        });
      }
    } catch (error) {
      console.error('Error fetching order:', error);
      return res.status(400).json({
        error: 'Order verification failed',
        message: 'Could not verify order details'
      });
    }

    // Log successful verification
    console.log(`Payment verified successfully: ${razorpay_payment_id}`);

    res.json({
      success: true,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({
      error: 'Payment verification failed',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

module.exports = router;
