import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Testimonial, testimonials } from "utils/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { quote, name, location, category } = testimonial;
  
  return (
    <div className="bg-secondary/20 backdrop-blur-sm border border-accent/10 rounded-lg p-6 md:p-8 flex flex-col h-full mx-3 sm:mx-4 my-2 flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_45%] lg:flex-[0_0_30%] transition-all duration-500 hover:shadow-[0_0_20px_rgba(179,141,77,0.1)] hover:-translate-y-1">
      <blockquote className="mb-6 text-white/90 font-playfair text-lg md:text-xl italic leading-relaxed flex-grow">
        "{quote}"
      </blockquote>
      <div className="mt-auto">
        <div className="flex items-center flex-wrap">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/20 mr-3 md:mr-4 flex items-center justify-center overflow-hidden shadow-inner">  
            <span className="text-accent font-bold text-lg">{name.charAt(0)}</span>
          </div>
          <div>
            <p className="font-semibold text-white">{name}</p>
            <p className="text-white/60 text-xs md:text-sm">{location}</p>
          </div>
          <div className="ml-auto mt-2 sm:mt-0">
            <span className="bg-accent/20 text-accent/90 px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DotButton = ({ selected, onClick }: { selected: boolean, onClick: () => void }) => (
  <button
    className={`relative w-2.5 h-2.5 md:w-3 md:h-3 mx-1 rounded-full ${selected ? "bg-accent" : "bg-accent/30"} transition-all duration-300 hover:scale-110`}
    type="button"
    onClick={onClick}
    aria-label={selected ? "Selected slide" : "Go to slide"}
  />
);

const PrevNextButton = ({
  enabled,
  onClick,
  isPrev,
}: {
  enabled: boolean;
  onClick: () => void;
  isPrev: boolean;
}) => (
  <button
    className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-secondary/50 border border-accent/20 text-white 
      ${enabled ? "opacity-100 hover:bg-accent/20 hover:scale-105" : "opacity-50 cursor-not-allowed"}
      transition-all duration-200 ease-in-out`}
    onClick={onClick}
    disabled={!enabled}
    aria-label={isPrev ? "Previous testimonial" : "Next testimonial"}
  >
    <span className="text-lg md:text-xl">
      {isPrev ? "←" : "→"}
    </span>
  </button>
);

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    dragFree: true,
    skipSnaps: false
  });
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    // Start autoplay
    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000); // Change slide every 5 seconds
    
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Sacred geometry subtle background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="w-[800px] h-[800px] rounded-full border border-accent absolute -top-400 -left-400 transform rotate-45"></div>
        <div className="w-[600px] h-[600px] rounded-full border border-accent absolute top-1/2 -right-300 transform -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 text-white">LIVES TRANSFORMED</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands who have already unlocked their hidden potential with these timeless principles
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex flex-col md:flex-row md:justify-between items-center mt-6 md:mt-8">
            <div className="flex mb-4 md:mb-0">
              <PrevNextButton onClick={scrollPrev} enabled={prevBtnEnabled} isPrev={true} />
              <div className="mx-2"></div>
              <PrevNextButton onClick={scrollNext} enabled={nextBtnEnabled} isPrev={false} />
            </div>
            
            <div className="flex items-center">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  selected={index === selectedIndex}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
