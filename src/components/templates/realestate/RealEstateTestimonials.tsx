"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "The team at Prestige Estates made finding our dream penthouse an absolute pleasure. Their attention to detail and market knowledge is unmatched in the industry.",
    name: "Richard & Catherine Bellamy",
    title: "Purchased a Manhattan Penthouse",
  },
  {
    quote:
      "Selling our family estate was an emotional process, but the professionalism and care we received exceeded every expectation. They achieved well above our asking price.",
    name: "Margaret Thornton-Wells",
    title: "Sold a Hamptons Estate",
  },
  {
    quote:
      "From our first consultation to the day we received the keys, every interaction felt bespoke and considered. Truly a white-glove real estate experience.",
    name: "Alexander & Sophia Chen",
    title: "Purchased a Beverly Hills Villa",
  },
];

export default function RealEstateTestimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-realestate-gold text-sm font-medium uppercase tracking-[0.2em] mb-3">
          Testimonials
        </p>
        <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-realestate-charcoal mb-16">
          What Our Clients Say
        </h2>

        <div className="relative min-h-[280px] sm:min-h-[240px] flex items-center">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-0 sm:-left-4 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-realestate-charcoal/15 text-realestate-charcoal-light hover:border-realestate-gold hover:text-realestate-gold transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonial */}
          <div className="flex-1 px-12 sm:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Quotation mark */}
                <span className="font-cormorant text-7xl sm:text-8xl text-realestate-gold/30 leading-none select-none block mb-2">
                  &ldquo;
                </span>
                <p className="font-cormorant text-xl sm:text-2xl text-realestate-charcoal leading-relaxed mb-8 -mt-8">
                  {testimonials[current].quote}
                </p>
                <div>
                  <p className="text-realestate-charcoal font-medium text-sm">
                    {testimonials[current].name}
                  </p>
                  <p className="text-realestate-charcoal-light text-xs mt-1">
                    {testimonials[current].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute right-0 sm:-right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-realestate-charcoal/15 text-realestate-charcoal-light hover:border-realestate-gold hover:text-realestate-gold transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-realestate-gold w-6"
                  : "bg-realestate-charcoal/20 hover:bg-realestate-charcoal/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
