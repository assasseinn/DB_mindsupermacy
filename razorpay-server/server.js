require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ extended: false }));
app.use(morgan('combined')); // Logging

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// Apply rate limiting to all routes
app.use(limiter);

// Payment routes with specific rate limiting
const paymentLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit each IP to 10 payment requests per hour
  message: 'Too many payment attempts, please try again later.'
});

app.use("/payment", paymentLimiter, require("./routes/payment"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
