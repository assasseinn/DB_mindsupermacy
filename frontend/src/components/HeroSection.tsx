import React from "react";
import SacredGeometryBackground from "components/SacredGeometryBackground";

export interface Props {
  headline: string;
  subheading: string;
  ctaText: string;
  onCtaClick: () => void;
}

export function HeroSection({
  headline,
  subheading,
  ctaText,
  onCtaClick
}: Props) {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with sacred geometry and neural network visualization */}
      <SacredGeometryBackground />

      {/* Floating discount badge */}
      <div className="absolute top-10 right-10 bg-gradient-to-r from-accent-600/80 to-accent-800/80 backdrop-blur-sm rounded-full px-6 py-3 text-white font-montserrat font-bold shadow-lg transform rotate-3 z-10">
        <span className="block text-sm tracking-wide">LIMITED TIME</span>
        <span className="block text-xl">91% OFF</span>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-montserrat font-extrabold text-white leading-tight mb-6 text-5xl md:text-6xl lg:text-7xl max-w-5xl mx-auto">
          {headline}
        </h1>

        <p className="font-inter text-white/90 mb-10 max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed">
          {subheading}
        </p>

        <button
          onClick={onCtaClick}
          className="px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-lg font-semibold text-lg uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(179,141,77,0.5)] hover:scale-105 transform"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}
