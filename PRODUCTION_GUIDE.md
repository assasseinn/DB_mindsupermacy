# Cashfree Production Deployment Guide

## 🚀 Production Readiness Checklist

This guide covers the complete setup for deploying Cashfree payment integration to production.

## 📋 Pre-Production Checklist

### ✅ Cashfree Account Setup
- [ ] Live Cashfree merchant account created
- [ ] KYC documents submitted and approved
- [ ] Production API keys generated
- [ ] Test transactions completed in sandbox
- [ ] Webhook endpoints configured

### ✅ Environment Configuration
- [ ] Production environment variables set
- [ ] Database schema deployed
- [ ] SSL certificates configured
- [ ] Domain verification completed

### ✅ Security Verification
- [ ] Webhook signature verification enabled
- [ ] Environment variables properly secured
- [ ] HTTPS enforced on all endpoints
- [ ] API rate limiting configured

## 🔧 Environment Variables

### Production Supabase Edge Function Variables
```bash
# Required for production
ENVIRONMENT=production
CASHFREE_APP_ID=your_production_app_id
CASHFREE_SECRET_KEY=your_production_secret_key
CASHFREE_WEBHOOK_SECRET=your_webhook_secret_key
FRONTEND_URL=https://yourdomain.com
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Frontend Environment Variables (.env.production)
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_CASHFREE_ENVIRONMENT=production
```

## 🏗️ Database Schema

### Production Database Setup
Run these SQL commands in your production Supabase instance:

```sql
-- Orders table
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cashfree_order_id TEXT NOT NULL UNIQUE,
  amount BIGINT NOT NULL,
  currency TEXT DEFAULT 'INR',
  status TEXT DEFAULT 'created',
  user_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payments table
CREATE TABLE IF NOT EXISTS payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email TEXT NOT NULL,
  amount BIGINT NOT NULL,
  cashfree_payment_id TEXT NOT NULL UNIQUE,
  cashfree_order_id TEXT NOT NULL,
  status TEXT DEFAULT 'success',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  FOREIGN KEY (cashfree_order_id) REFERENCES orders(cashfree_order_id)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_orders_user_email ON orders(user_email);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_payments_user_email ON payments(user_email);
CREATE INDEX IF NOT EXISTS idx_payments_order_id ON payments(cashfree_order_id);

-- Enable Row Level Security
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- RLS Policies (adjust based on your auth requirements)
CREATE POLICY "Users can view their own orders" ON orders
  FOR SELECT USING (auth.email() = user_email);

CREATE POLICY "Users can view their own payments" ON payments
  FOR SELECT USING (auth.email() = user_email);
```

## 🔐 Security Configuration

### Webhook Security
1. **Enable webhook signature verification** in production
2. **Use HTTPS endpoints** for all webhook URLs
3. **Validate webhook payload** before processing

### API Security
1. **Rate limiting** implemented in Supabase functions
2. **Environment variable validation** on startup
3. **Input validation** for all user inputs

## 🌐 Cashfree Production Configuration

### Dashboard Settings
1. **Webhook URL**: `https://your-project.supabase.co/functions/v1/send-payment-confirmation/webhook`
2. **Return URL**: `https://yourdomain.com/payment-success`
3. **Events to Subscribe**:
   - PAYMENT_SUCCESS_WEBHOOK
   - PAYMENT_FAILED_WEBHOOK
   - PAYMENT_USER_DROPPED_WEBHOOK

### Testing in Production
```bash
# Test order creation
curl -X POST https://your-project.supabase.co/functions/v1/send-payment-confirmation \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -d '{
    "amount": 19900,
    "currency": "INR",
    "customer_details": {
      "customer_id": "test_customer",
      "customer_name": "Test User",
      "customer_email": "test@example.com",
      "customer_phone": "9999999999"
    }
  }'
```

## 📊 Monitoring & Logging

### Key Metrics to Monitor
- **Payment Success Rate**: Target >95%
- **API Response Time**: Target <2s
- **Error Rate**: Target <1%
- **Webhook Processing Time**: Target <1s

### Logging Strategy
- All payment attempts logged with timestamps
- Error tracking with detailed stack traces
- Webhook events logged for audit trail
- Performance metrics tracked

### Supabase Function Logs
Access logs via Supabase Dashboard:
1. Go to Edge Functions → send-payment-confirmation
2. Check Logs tab for real-time monitoring
3. Set up alerts for error patterns

## 🚨 Error Handling

### Common Production Issues
1. **Network Timeouts**: Implement retry logic
2. **Webhook Failures**: Queue failed webhooks for retry
3. **Database Deadlocks**: Use proper transaction handling
4. **Rate Limiting**: Implement exponential backoff

### Error Recovery
```javascript
// Example retry logic for critical operations
const retryOperation = async (operation, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
    }
  }
};
```

## 🔄 Deployment Process

### Step-by-Step Deployment
1. **Deploy Database Schema** to production Supabase
2. **Set Environment Variables** in Supabase Edge Functions
3. **Deploy Edge Function** with production configuration
4. **Deploy Frontend** with production environment variables
5. **Configure Cashfree Webhooks** with production URLs
6. **Test End-to-End Flow** with small test amounts
7. **Monitor Initial Transactions** closely

### Rollback Plan
1. Keep previous version of Edge Function ready
2. Database migration rollback scripts prepared
3. Frontend fallback configuration available
4. Cashfree webhook URL quick revert process

## 📈 Performance Optimization

### Database Optimization
- Proper indexing on frequently queried columns
- Connection pooling for high traffic
- Regular vacuum and analyze operations

### API Optimization
- Implement caching where appropriate
- Use database transactions efficiently
- Optimize Supabase queries

### Frontend Optimization
- Lazy load Cashfree SDK
- Implement proper loading states
- Cache static assets

## 🔍 Testing Checklist

### Pre-Production Testing
- [ ] End-to-end payment flow
- [ ] Webhook signature verification
- [ ] Error handling scenarios
- [ ] Network failure simulation
- [ ] High load testing
- [ ] Security penetration testing

### Go-Live Testing
- [ ] Small test transaction
- [ ] Webhook delivery verification
- [ ] Email notification delivery
- [ ] Database record accuracy
- [ ] Error logging functionality

## 📞 Support & Maintenance

### Cashfree Support
- **Technical Support**: https://support.cashfree.com/
- **Documentation**: https://docs.cashfree.com/
- **Status Page**: https://status.cashfree.com/

### Monitoring Tools
- Supabase Dashboard for function logs
- Database performance monitoring
- Cashfree dashboard for transaction monitoring
- Custom alerting for critical errors

## 🚀 Go-Live Checklist

### Final Pre-Launch Steps
- [ ] All environment variables verified
- [ ] Database backups scheduled
- [ ] Monitoring alerts configured
- [ ] Support team notified
- [ ] Documentation updated
- [ ] Rollback plan tested

### Post-Launch Monitoring
- [ ] Transaction success rates
- [ ] API response times
- [ ] Error log monitoring
- [ ] Customer feedback tracking
- [ ] Payment reconciliation

---

## ⚠️ Important Notes

1. **Never commit production credentials** to version control
2. **Always test webhook endpoints** before going live
3. **Monitor the first 24 hours** closely after deployment
4. **Have customer support ready** for payment-related queries
5. **Keep Cashfree dashboard accessible** for real-time monitoring

## 📋 Production Maintenance

### Daily Tasks
- Check payment success rates
- Monitor error logs
- Verify webhook deliveries

### Weekly Tasks
- Database performance review
- Security log analysis
- Payment reconciliation

### Monthly Tasks
- Performance optimization review
- Security audit
- Disaster recovery testing