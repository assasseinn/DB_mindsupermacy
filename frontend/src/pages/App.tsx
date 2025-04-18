import React from "react";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "components/HeroSection";
import { PrinciplesSection } from "components/PrinciplesSection";
import { TestimonialsSection } from "components/TestimonialsSection";
import { ProgramValueSection } from "components/ProgramValueSection";
import { TrustElementsSection } from "components/TrustElementsSection";

export default function App() {
  const navigate = useNavigate();
  
  // Handler for CTA button click
  const handleCtaClick = () => {
    console.log("CTA button clicked");
    navigate("/payment");
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-neural-gradient text-white overflow-hidden">
      {/* Hero Section */}
      <HeroSection 
        headline="ANCIENT WISDOM REDISCOVERED: Unlock Your Other Self"
        subheading="Discover why this suppressed 1930s masterpiece helped thousands break free from mental slavery and achieve impossible goals"
        ctaText="Secure Your Copy Now"
        onCtaClick={handleCtaClick}
      />
      
      {/* Key Principles Section */}
      <PrinciplesSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Program Value and Pricing Section */}
      <ProgramValueSection />
      
      {/* Trust Elements Section */}
      <TrustElementsSection />
      
      {/* Footer with copyright */}
      <footer className="w-full py-8 text-center text-white/50 text-sm">
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
