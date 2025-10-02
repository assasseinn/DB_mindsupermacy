import React from "react";
import { motion } from "framer-motion";
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
    <div className="relative w-full flex flex-col items-center justify-start overflow-hidden pt-14 pb-8 sm:pt-16 sm:pb-12 lg:justify-center lg:pt-16 lg:pb-16 lg:min-h-[calc(100vh-4rem)]">
      {/* Background with sacred geometry and neural network visualization */}
      <SacredGeometryBackground />

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <motion.img
          src="/Mandala.png"
          alt="Rotating mandala"
          className="w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] mb-6 md:mb-8 drop-shadow-[0_0_35px_rgba(179,141,77,0.35)]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
          whileHover={{ scale: 1.05 }}
        />
        <h1 className="font-montserrat font-extrabold text-white leading-tight mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-5xl mx-auto">
          {headline}
        </h1>

        <p className="font-inter text-white/90 mb-6 md:mb-10 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed">
          {subheading}
        </p>

        <button
          onClick={onCtaClick}
          className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-lg font-semibold text-base md:text-lg uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_15px_rgba(179,141,77,0.5)] hover:scale-105 transform"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}
