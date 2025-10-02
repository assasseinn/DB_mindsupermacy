import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function ProgramValueSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full py-20 px-4 relative overflow-hidden bg-gradient-to-b from-secondary/5 to-secondary/20">
      {/* Sacred geometry subtle background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <motion.div 
          animate={{
            rotate: 360,
          }} 
          transition={{ 
            duration: 120, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-[800px] h-[800px] rounded-full border border-accent absolute top-1/4 -right-400 transform"
        />
        <motion.div
          animate={{
            rotate: -360,
          }} 
          transition={{ 
            duration: 180, 
            repeat: Infinity, 
            ease: "linear" 
          }} 
          className="w-[500px] h-[500px] rounded-full border border-accent absolute -bottom-200 left-1/3"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-5">
          <svg viewBox="0 0 100 100">
            <path d="M50,0 L97.5528,25 L97.5528,75 L50,100 L2.44717,75 L2.44717,25 Z" fill="none" stroke="#B38D4D" strokeWidth="0.5" />
            <path d="M50,20 L85.3553,35 L85.3553,65 L50,80 L14.6447,65 L14.6447,35 Z" fill="none" stroke="#B38D4D" strokeWidth="0.5" />
            <path d="M50,40 L67.0711,45 L67.0711,55 L50,60 L32.9289,55 L32.9289,45 Z" fill="none" stroke="#B38D4D" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Program Contents */}
          <div className="space-y-8 backdrop-blur-sm bg-secondary/10 rounded-xl p-8 border border-accent/10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white">
              <span className="relative inline-block">
                Success Mastery <span className="text-accent">Complete</span> Audio Program
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-[3px] bg-accent/40"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.6 }}
                  viewport={{ once: true }}
                />
              </span>
            </motion.h2>
            
            <div className="space-y-6">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl text-accent font-bold flex items-center">
                <span className="mr-2 text-white opacity-50">01</span>
                What's Inside:
              </motion.h3>
              
              <div className="space-y-6">
                {programItems.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start group">
                    <div className="mr-4 flex-shrink-0 w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg group-hover:text-accent transition-colors duration-300">{item.title}</h4>
                      <p className="text-white/70 text-sm md:text-base">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Pricing */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-secondary/20 backdrop-blur-sm rounded-xl p-8 border border-accent/20 transform hover:shadow-[0_0_30px_rgba(179,141,77,0.2)] transition-all duration-500 relative overflow-hidden">
            
            {/* Sacred geometry pattern in background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-accent/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-accent/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-accent/10 rounded-full"></div>
            </div>
            
            <div className="text-center mb-6 relative z-10">
              <h3 className="text-3xl font-bold text-white mb-2">Unlock Your Potential Today</h3>
              <p className="text-white/70">Complete program with all bonuses</p>
            </div>
            
            <div className="flex justify-center items-center mb-8 relative z-10">
              <div className="text-xl text-white/50 line-through mr-4">₹1200</div>
              <div className="text-5xl font-extrabold text-white">₹299</div>
              <div className="ml-4 bg-accent/30 text-accent px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                Save ₹901
              </div>
            </div>
            
            <div className="bg-accent/10 rounded-lg p-4 text-center mb-8 border border-accent/10 relative z-10">
              <motion.div 
                className="flex items-center justify-center"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-white font-bold">
                  Final <span className="text-accent">few spots</span> before the price jumps
                </div>
              </motion.div>
            </div>
            
            <button 
              onClick={() => navigate("/payment")} 
              className="relative w-full py-4 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold text-lg uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(179,141,77,0.5)] overflow-hidden group">
              {/* Shine effect */}
              <motion.span 
                className="absolute top-0 -left-[100px] w-20 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-[30deg]" 
                animate={{ x: [0, 500] }}
                transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 2 }}
                style={{ zIndex: 5 }}
              />
              <span className="relative z-10 flex items-center justify-center">
                Secure Your Copy Now
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </button>
            
            <div className="mt-6 text-center flex items-center justify-center relative z-10">
              <svg className="w-5 h-5 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="text-white/70 text-sm">
                <span className="font-medium text-accent">15-Day</span> Money-Back "Soul" Guarantee
              </div>
            </div>
            
            {/* Payment Trust Indicators */}
            <div className="mt-6 text-center relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center p-1">
                  <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z" fill="#888" />
                    <path d="M4 6h16v2H4z" fill="#888" />
                    <path d="M7 14.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#888" />
                  </svg>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center p-1">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" fill="#888" />
                    <path d="M10.94 15.06L16 10l-1.41-1.41-3.65 3.65-1.59-1.59L8 12l2.94 3.06z" fill="#888" />
                  </svg>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center p-1">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#888" />
                  </svg>
                </div>
              </div>
              <p className="text-white/50 text-xs">Secure checkout with all major payment methods</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const programItems = [
  {
    icon: "🎧",
    title: "7 High-Quality Audio Recordings",
    description: "Professionally produced sessions focusing on each principle, designed for maximum retention and rapid transformation."
  },
  {
    icon: "🛡️",
    title: "Mind Control Resistance Guide",
    description: "Learn to protect yourself from the manipulative mental techniques used by media, advertisers, and those in positions of authority."
  },
  {
    icon: "📝",
    title: "Success Journaling Templates",
    description: "Structured templates to document your journey, track your progress, and reinforce the principles through daily reflection."
  },
  {
    icon: "📅",
    title: "30 Days of Success Exercises",
    description: "Daily practices that build upon each other to integrate these principles into your subconscious mind permanently."
  },
  {
    icon: "🧠",
    title: "Mental Mastery Visualization Audio",
    description: "Specially crafted audio session that uses advanced sound engineering to enhance your mental visualization abilities."
  },
  {
    icon: "📱",
    title: "Mobile Access Anywhere",
    description: "Stream or download all materials to any device for access whenever and wherever inspiration strikes."
  },
  {
    icon: "🔄",
    title: "Lifetime Updates",
    description: "Receive all future enhancements and additional content at no extra cost as the program evolves."
  }
];
