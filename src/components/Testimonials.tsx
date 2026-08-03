import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // The carousel body indexes straight into TESTIMONIALS_DATA, so an empty
  // array throws and takes the whole page down with it. App.tsx guards the
  // mount as well, but this component defends itself regardless of caller.
  const hasTestimonials = TESTIMONIALS_DATA.length > 0;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  // Optional auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  if (!hasTestimonials) return null;

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#FAF9F6] text-gray-900 overflow-hidden relative">
      {/* Visual background accents */}
      <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gray-200/50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-orange-600"></span>
            <span className="text-xs font-mono tracking-[0.25em] text-orange-600 uppercase font-semibold">
              CLIENT TRUST
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900">
            Reviews from Built Spaces
          </h2>
        </div>

        {/* Testimonial Active Display Area */}
        <div className="bg-white border border-gray-200/80 shadow-md p-8 md:p-16 max-w-4xl mx-auto relative group">
          {/* Big architectural double quotes */}
          <div className="absolute top-8 left-8 text-gray-100 select-none pointer-events-none group-hover:text-orange-50 transition-colors duration-500">
            <Quote className="w-24 h-24 stroke-[0.5]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
              id={`testimonial-slide-${activeIndex}`}
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: TESTIMONIALS_DATA[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-2xl font-display font-medium text-gray-800 leading-relaxed mb-10 italic">
                "{TESTIMONIALS_DATA[activeIndex].quote}"
              </blockquote>

              {/* Author detail info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-100 pt-6">
                <div>
                  <h4 className="font-display font-bold text-gray-900 text-base md:text-lg">
                    {TESTIMONIALS_DATA[activeIndex].author}
                  </h4>
                  <p className="text-xs font-mono tracking-widest text-orange-600 font-medium uppercase mt-0.5">
                    {TESTIMONIALS_DATA[activeIndex].role}
                  </p>
                </div>

                <div className="px-3 py-1 bg-gray-50 border border-gray-100 font-mono text-[10px] text-gray-500 tracking-wider">
                  CASE STUDY: {TESTIMONIALS_DATA[activeIndex].project}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Controllers */}
          <div className="absolute right-8 bottom-8 z-20 flex gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 border border-gray-200 hover:border-orange-500 bg-white text-gray-700 hover:text-orange-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous review"
              id="prev-testimonial-btn"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 border border-gray-200 hover:border-orange-500 bg-white text-gray-700 hover:text-orange-600 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next review"
              id="next-testimonial-btn"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel indicator bullets */}
        <div className="flex justify-center gap-2.5 mt-8">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 transition-all duration-300 cursor-pointer ${
                activeIndex === idx ? 'w-8 bg-orange-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              id={`testimonial-bullet-${idx}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
