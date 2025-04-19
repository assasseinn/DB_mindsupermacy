require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const router = express.Router();

router.post("/orders", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options = {
            amount: req.body.amount, // amount in paise
            currency: "INR",
            receipt: "receipt_order_" + Math.floor(Math.random() * 1000000),
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occurred");
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/success", async (req, res) => {
    try {
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
        } = req.body;

        const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
        const digest = shasum.digest("hex");

        if (digest !== razorpaySignature)
            return res.status(400).json({ msg: "Transaction not legit!" });

        res.json({
            msg: "success",
            orderId: razorpayOrderId,
            paymentId: razorpayPaymentId,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
