import React from "react";
import { PrincipleIcon } from "components/PrincipleIcon";
import { Principle, principles } from "utils/principles";

interface PrincipleCardProps {
  principle: Principle;
}

const PrincipleCard = ({ principle }: PrincipleCardProps) => {
  const { title, description, iconType, id } = principle;
  
  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-lg border border-accent/10 bg-secondary/10 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(179,141,77,0.15)] hover:-translate-y-1">
      {/* Animated background element */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Sacred geometry pattern in background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-accent/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 border border-accent/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-accent/10 rounded-full"></div>
      </div>
      
      <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
        {/* Icon */}
        <div className="mb-5 bg-accent/10 text-accent w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <PrincipleIcon type={iconType} className="w-8 h-8" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed text-sm md:text-base flex-grow">
          {description}
        </p>
        
        {/* Learn more indicator */}
        <a 
          href={`/Course?id=${id}`} 
          className="mt-5 flex items-center text-accent/80 text-sm font-medium group-hover:text-accent transition-colors duration-300"
        >
          <span>Learn More</span>
          <svg 
            className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export function PrinciplesSection() {

  return (
    <section className="w-full py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Sacred geometry subtle background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="w-[1000px] h-[1000px] rounded-full border border-accent absolute -top-500 -right-500 transform rotate-45"></div>
        <div className="w-[600px] h-[600px] rounded-full border border-accent absolute bottom-0 -left-300"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white">
            Master These 7 Forbidden Principles
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            These principles have been guarded for decades, now finally revealed through this exclusive audio program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
          {principles.map((principle) => (
            <PrincipleCard key={principle.id} principle={principle} />
          ))}
        </div>
        
        <div className="mt-10 md:mt-14 text-center">
          <a href="/Course" className="relative overflow-hidden group bg-accent/10 hover:bg-accent/20 text-accent border border-accent/30 font-medium px-8 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(179,141,77,0.3)]">
            <span className="relative z-10 flex items-center justify-center">
              Discover The 7 Principles
              <svg 
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-accent/10 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
