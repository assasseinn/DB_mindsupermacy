import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

interface Payment {
  id: string;
  user_email: string;
  amount: number;
  cashfree_payment_id: string;
  cashfree_order_id: string;
  status: string;
  created_at: string;
}

export default function PaymentHistory() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const { data: session } = await supabase.auth.getSession();
      if (!session.session?.user) {
        navigate('/login');
        return;
      }

      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .eq('user_email', session.session.user.email)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPayments(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="bg-red-500/10 p-8 rounded-xl border border-red-500/20 text-center">
          <p className="text-red-400">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-accent text-black rounded hover:bg-accent/90 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Payment History</h1>

          {payments.length === 0 ? (
            <div className="bg-secondary/10 p-8 rounded-xl border border-accent/20 text-center">
              <p className="text-white/70">No payment history found.</p>
              <button
                onClick={() => navigate('/payment')}
                className="mt-4 px-6 py-2 bg-accent text-black rounded hover:bg-accent/90 transition-colors"
              >
                Make a Payment
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {payments.map((payment) => (
                <motion.div
                  key={payment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-secondary/10 p-6 rounded-xl border border-accent/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-sm ${
                          payment.status === 'success' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {payment.status.toUpperCase()}
                        </span>
                        <span className="text-white/50 text-sm">
                          {format(new Date(payment.created_at), 'MMM d, yyyy h:mm a')}
                        </span>
                      </div>
                      <p className="text-white/70 text-sm">
                        Order ID: {payment.cashfree_order_id}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <p className="text-2xl font-bold text-white">
                        ₹{(payment.amount / 100).toFixed(2)}
                      </p>
                      <p className="text-white/50 text-sm">
                        Payment ID: {payment.cashfree_payment_id}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/')}
              className="px-6 py-2 bg-secondary/20 text-white rounded hover:bg-secondary/30 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 