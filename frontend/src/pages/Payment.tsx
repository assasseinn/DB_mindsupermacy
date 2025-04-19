import React, { startTransition } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/extensions/shadcn/components/separator";

const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", icon: "💳" },
  { id: "upi", name: "UPI", icon: "🇮🇳" },
  { id: "netbanking", name: "Net Banking", icon: "🏦" },
  { id: "wallet", name: "Digital Wallet", icon: "📱" },
];

const securityBadges = [
  { icon: "🔒", label: "Secure Payment" },
  { icon: "🛡️", label: "Data Protection" },
  { icon: "⚡", label: "Instant Delivery" },
];

export default function Payment() {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = React.useState("card");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    // Create order on backend
    const orderUrl = "http://localhost:5000/payment/orders";
    let orderData;
    try {
      const { data } = await axios.post(orderUrl, { amount: 19900 }); // 199 INR in paise
      orderData = data;
    } catch (err) {
      alert("Server error. Are you online?");
      return;
    }
    const options = {
      key: "rzp_test_tpWBB8LOmOpufG", // Razorpay test key id
      amount: orderData.amount.toString(),
      currency: orderData.currency,
      name: "MindSupremacy",
      description: "Success Mastery Program",
      image: "/logo.png",
      order_id: orderData.id,
      handler: async function (response: any) {
        // Verify payment on backend
        const verifyUrl = "http://localhost:5000/payment/success";
        try {
          const verification = await axios.post(verifyUrl, {
            orderCreationId: orderData.id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          });
          alert(verification.data.msg);
        } catch (err) {
          alert("Payment verification failed!");
        }
        startTransition(() => {
          navigate("/");
        });
      },
      prefill: {
        name: formData.name,
        email: formData.email,
      },
      theme: {
        color: "#B38D4D"
      }
    };
    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };


  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-neural-gradient text-white overflow-hidden">
      {/* Sacred Geometry Background */}
      <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]">
          <svg viewBox="0 0 100 100">
            <path d="M50,0 L97.5528,25 L97.5528,75 L50,100 L2.44717,75 L2.44717,25 Z" fill="none" stroke="#B38D4D" strokeWidth="0.5" />
            <path d="M50,20 L85.3553,35 L85.3553,65 L50,80 L14.6447,65 L14.6447,35 Z" fill="none" stroke="#B38D4D" strokeWidth="0.5" />
            <path d="M50,40 L67.0711,45 L67.0711,55 L50,60 L32.9289,55 L32.9289,45 Z" fill="none" stroke="#B38D4D" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      
      {/* Back button */}
      <div className="container mx-auto px-4 pt-8">
        <button 
          onClick={handleBackToHome}
          className="flex items-center text-white/70 hover:text-accent transition-colors duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Product Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="backdrop-blur-sm bg-secondary/10 rounded-xl p-8 border border-accent/10 relative overflow-hidden">
              {/* Sacred geometry subtle background */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-accent/10 rounded-full opacity-20"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 border border-accent/10 rounded-full opacity-20"></div>
              
              <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
                <span className="text-accent">Complete</span> Success Mastery Program
              </h1>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    <span className="text-2xl">🎧</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">7 High-Quality Audio Recordings</h4>
                    <p className="text-white/70">Master each principle with professionally produced sessions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    <span className="text-2xl">📝</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Success Journaling Templates</h4>
                    <p className="text-white/70">Track your progress and reinforce principles daily</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0 w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">30 Days of Success Exercises</h4>
                    <p className="text-white/70">Daily practices to integrate these principles permanently</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70">Original Price:</span>
                  <span className="text-white/50 line-through">₹1000</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/70">Discount:</span>
                  <span className="text-accent">-₹801</span>
                </div>
                <div className="flex items-center justify-between text-xl font-bold">
                  <span className="text-white">Today's Price:</span>
                  <span className="text-white">₹199</span>
                </div>
              </div>
              
              <div className="mt-6 bg-accent/10 rounded-lg p-4 text-center border border-accent/10">
                <div className="flex items-center justify-center text-white">
                  <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">
                    Only <span className="text-accent">23 copies</span> left at this price
                  </span>
                </div>
              </div>
            </div>
            
            {/* Money-back guarantee */}
            <div className="backdrop-blur-sm bg-secondary/10 rounded-xl p-6 border border-accent/10">
              <div className="flex items-center">
                <div className="mr-4 text-accent">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">60-Day Money-Back <span className="text-accent">"Soul"</span> Guarantee</h3>
                  <p className="text-white/70">
                    If these principles don't create a profound shift in your mindset and results, simply request a full refund.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Checkout Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="backdrop-blur-sm bg-secondary/10 rounded-xl p-8 border border-accent/10 relative overflow-hidden"
          >
            {/* Sacred geometry subtle background */}
            <div className="absolute -top-20 -right-20 w-40 h-40 border border-accent/10 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-20 h-20 border border-accent/10 rounded-full opacity-20"></div>
            
            <h2 className="text-2xl font-bold mb-6 text-white">Secure Checkout</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-white/80 text-sm font-medium mb-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-4">
                  <label className="block text-white/80 text-sm font-medium mb-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your email for order confirmation"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="pt-4 pb-6">
                  <h3 className="text-lg font-semibold mb-4 text-white">Payment Method</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {paymentMethods.map((method) => (
                      <div 
                        key={method.id}
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 ${selectedPayment === method.id ? 'border-accent bg-accent/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                        onClick={() => setSelectedPayment(method.id)}
                      >
                        <div className="mr-3 text-xl">{method.icon}</div>
                        <div className="text-sm font-medium">{method.name}</div>
                      </div>
                    ))}
                  </div>
                  
                  
                </div>
                
                <Separator className="bg-white/10" />
                
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full py-4 px-6 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold text-lg uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(179,141,77,0.5)] overflow-hidden group relative"
                  >
                    {/* Shine effect */}
                    <motion.span 
                      className="absolute top-0 -left-[100px] w-20 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-[30deg]" 
                      animate={{ x: [0, 500] }}
                      transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 2 }}
                      style={{ zIndex: 5 }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      Complete Purchase
                      <svg 
                        className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </form>
            
            {/* Security badges */}
            <div className="mt-8 grid grid-cols-3 gap-2">
              {securityBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-accent text-xl mb-1">{badge.icon}</div>
                  <div className="text-white/60 text-xs text-center">{badge.label}</div>
                </div>
              ))}
            </div>
            
            {/* Payment icons */}
            <div className="mt-6 border-t border-white/10 pt-6">
              <div className="text-center text-white/50 text-xs mb-3">We accept</div>
              <div className="flex justify-center space-x-4">
                <div className="w-10 h-6 bg-white/10 rounded-md flex items-center justify-center">Visa</div>
                <div className="w-10 h-6 bg-white/10 rounded-md flex items-center justify-center">MC</div>
                <div className="w-10 h-6 bg-white/10 rounded-md flex items-center justify-center">Amex</div>
                <div className="w-10 h-6 bg-white/10 rounded-md flex items-center justify-center">UPI</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Final conversion element */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto backdrop-blur-sm bg-secondary/5 rounded-xl p-8 border border-accent/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Don't Let Your <span className="text-accent">Other Self</span> Hold You Back
          </h2>
          <p className="text-white/80 mb-8">
            Join thousands who have already unlocked their true potential with these 7 forbidden principles. The life you've always imagined is just one decision away.
          </p>
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/70">Instant Access</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/70">Risk-Free Guarantee</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/70">Limited-Time Offer</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <footer className="w-full py-8 text-center text-white/50 text-sm mt-auto">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} MindSupremacy. All rights reserved.</p>
          <p className="mt-2">
            <span className="mx-2 hover:text-white/80 cursor-pointer transition-colors">Terms</span>
            <span className="mx-2 hover:text-white/80 cursor-pointer transition-colors">Privacy</span>
            <span className="mx-2 hover:text-white/80 cursor-pointer transition-colors">Contact</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
