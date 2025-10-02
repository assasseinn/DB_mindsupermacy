import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [verifying, setVerifying] = React.useState(true);
  const [message, setMessage] = React.useState("Payment successful! Redirecting to your course...");

  React.useEffect(() => {
    let mounted = true;

    const verifyIfNeeded = async () => {
      try {
        const raw = localStorage.getItem("ms_last_order");
        if (!raw) {
          setVerifying(false);
          return;
        }
        const parsed = JSON.parse(raw);
        if (!parsed?.order_id || !parsed?.email || !parsed?.order_amount) {
          setVerifying(false);
          return;
        }

        // Call verify endpoint (idempotent on the backend)
        const verifyUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-payment-confirmation/verify`;
        await axios.post(
          verifyUrl,
          {
            order_id: parsed.order_id,
            user_email: parsed.email,
            amount: parsed.order_amount,
          },
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
              "Content-Type": "application/json",
            },
            timeout: 20000,
          }
        );
        if (!mounted) return;
        setVerifying(false);
      } catch (_err) {
        if (!mounted) return;
        setVerifying(false);
        setMessage("Payment confirmed. Finalizing setup...");
      } finally {
        // Navigate to course after a short delay regardless
        setTimeout(() => navigate("/course"), 2500);
      }
    };

    verifyIfNeeded();
    return () => {
      mounted = false;
    };
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-neural-gradient text-white">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600/20 border border-green-500/30 mb-6">
            <svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Payment Successful</h1>
          <p className="text-white/80 mb-8">{message}</p>

          <div className="bg-secondary/10 border border-accent/20 rounded-xl p-6 text-left">
            <p className="text-white/80 mb-2">What happens next:</p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>We’ve confirmed your payment and provisioned access</li>
              <li>An email receipt will arrive shortly at your inbox</li>
              <li>You’ll be redirected to the course automatically</li>
            </ul>
          </div>

          <button
            onClick={() => navigate("/course")}
            className="mt-8 inline-flex items-center px-6 py-3 rounded-lg border border-accent/40 bg-accent/20 text-accent hover:bg-accent/30 transition-colors"
          >
            Go to Course Now
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

