import React, { startTransition } from "react";
import { useNavigate } from "react-router-dom";
import { HeroSection } from "components/HeroSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PrinciplesSection } from "components/PrinciplesSection";
import { TestimonialsSection } from "components/TestimonialsSection";
import { ProgramValueSection } from "components/ProgramValueSection";
import { TrustElementsSection } from "components/TrustElementsSection";

export default function App() {
  const navigate = useNavigate();
  
  // Handler for CTA button click
  const handleCtaClick = () => {
    console.log("CTA button clicked");
    startTransition(() => {
      navigate("/payment");
    });
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-neural-gradient text-white overflow-hidden">
      <Header />
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
      
      {/* Professional Footer with Legal Links */}
      <Footer />
    </div>
  );
}
