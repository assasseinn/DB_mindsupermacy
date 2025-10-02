import React from "react";
import { motion } from "framer-motion";

export function TrustElementsSection() {
  return (
    <section className="w-full py-16 px-4 relative overflow-hidden bg-gradient-to-b from-black/40 to-black/10">
      {/* Sacred geometry background patterns */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-accent rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
          <svg viewBox="0 0 100 100">
            <path d="M50,0 L97.5528,25 L97.5528,75 L50,100 L2.44717,75 L2.44717,25 Z" fill="none" stroke="#B38D4D" strokeWidth="0.5" />
            <path d="M50,20 L85.3553,35 L85.3553,65 L50,80 L14.6447,65 L14.6447,35 Z" fill="none" stroke="#B38D4D" strokeWidth="0.5" />
            <path d="M50,40 L67.0711,45 L67.0711,55 L50,60 L32.9289,55 L32.9289,45 Z" fill="none" stroke="#B38D4D" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.h2 
          className="text-center text-3xl md:text-4xl font-extrabold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-accent">Trust</span> & <span className="text-accent">Security</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustElements.map((element, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center p-6 backdrop-blur-sm bg-secondary/5 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 border border-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <motion.div 
                className="relative z-10 text-accent mb-6 w-16 h-16 flex items-center justify-center bg-secondary/30 rounded-full border border-accent/20 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {element.icon}
              </motion.div>
              
              <h3 className="relative z-10 text-white font-bold text-xl mb-3 group-hover:text-accent transition-colors duration-300">{element.title}</h3>
              <p className="relative z-10 text-white/70">{element.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-3xl mx-auto">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border border-accent/30 rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border border-accent/30 rounded-full opacity-50"></div>
            
            {/* Certificate-like design */}
            <div className="border-2 border-accent/40 rounded-xl px-8 py-6 bg-secondary/30 backdrop-blur-md text-center relative overflow-hidden">
              {/* Shine effect */}
              <motion.span 
                className="absolute top-0 -left-[100px] w-20 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-[30deg]" 
                animate={{ x: [0, 500] }}
                transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 2 }}
              />
              
              <div className="flex flex-col md:flex-row items-center mb-4">
                <div className="mr-4 text-accent">
                  <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-1">15-Day Money-Back <span className="text-accent">"Soul"</span> Guarantee</h3>
                  <p className="text-white/80 max-w-2xl">
                    If these principles don't create a profound shift in your mindset and results within 15 days, simply request a full refund. We stand behind this wisdom with absolute confidence.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center space-x-3 mt-6">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none">
                    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const trustElements = [
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0110 0v4"></path>
      </svg>
    ),
    title: "Secure Payment",
    description: "Your transaction is protected with bank-level encryption and security protocols, ensuring your data remains private and safe."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M9 12l2 2 4-4"></path>
      </svg>
    ),
    title: "Money Back Guarantee",
    description: "Try the complete program risk-free with our 15-day guarantee. If you're not satisfied, simply request a full refund—no questions asked."
  },
  {
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    ),
    title: "Instant Access",
    description: "Receive immediate access to all materials after purchase. No waiting—start your transformation journey within minutes of your order."
  }
];
