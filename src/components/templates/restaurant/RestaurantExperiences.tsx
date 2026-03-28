"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Wine, UtensilsCrossed, ChefHat, X } from "lucide-react";

const experiences = [
  {
    icon: UtensilsCrossed,
    title: "Private Dining",
    description:
      "Host an unforgettable evening in our exclusive private dining room, accommodating up to 16 guests. Enjoy a bespoke menu crafted by Chef Laurent, with dedicated sommelier service and personalized table settings.",
    detail: "From 16 guests",
    modal: {
      subtitle: "An Exclusive Evening, Entirely Yours",
      body: "Our private dining room, nestled behind hand-carved oak doors, offers an intimate sanctuary for celebrations, business gatherings, or simply an evening where every detail is curated to your vision. Chef Laurent personally designs a bespoke menu in consultation with you, while our dedicated sommelier pairs each course with selections from our cellar.",
      highlights: [
        { label: "Guests", value: "Up to 16" },
        { label: "Menu", value: "Bespoke 5–8 courses" },
        { label: "Duration", value: "3–4 hours" },
        { label: "Availability", value: "Tue – Sat evenings" },
      ],
      quote:
        "Every great evening begins with a table set not just with silverware, but with intention.",
    },
  },
  {
    icon: Wine,
    title: "Wine Pairing",
    description:
      "Let our sommelier guide you through a curated journey of five exceptional wines, each selected to complement the nuances of your tasting menu. Discover rare vintages from our cellar of over 800 labels.",
    detail: "5-course journey",
    modal: {
      subtitle: "A Journey Through the Vineyards",
      body: "Our Head Sommelier, Claire Moreau, has spent two decades traversing the world's most celebrated wine regions. Each pairing is a conversation between plate and glass — a Burgundy that awakens a truffle velouté, a Riesling that lifts the delicate sweetness of langoustine. This is not merely drinking wine; it is understanding it.",
      highlights: [
        { label: "Wines", value: "5 curated pairings" },
        { label: "Cellar", value: "800+ labels" },
        { label: "Regions", value: "France, Italy, New World" },
        { label: "Add-on", value: "Available with any tasting menu" },
      ],
      quote:
        "Wine is sunlight, held together by water. Our role is to reunite it with the right dish.",
    },
  },
  {
    icon: ChefHat,
    title: "Chef's Table",
    description:
      "Sit at the heart of our kitchen for an intimate 8-course experience. Watch Chef Laurent and his team create each dish before your eyes, with personal explanations of technique, inspiration, and provenance.",
    detail: "8-course experience",
    modal: {
      subtitle: "Where the Kitchen Becomes Your Stage",
      body: "Reserved for just four guests per evening, the Chef's Table places you within arm's reach of the brigade. Over eight meticulously crafted courses, Chef Laurent shares the stories behind each creation — the Provençal farmer who grows our heritage tomatoes, the morning the fish was pulled from the Atlantic, the memory that inspired a dessert. This is dining as narrative.",
      highlights: [
        { label: "Courses", value: "8 courses" },
        { label: "Seats", value: "4 per evening" },
        { label: "Duration", value: "3.5–4 hours" },
        { label: "Availability", value: "Thu – Sat, 7:30 PM" },
      ],
      quote:
        "Cooking is an act of love. At the Chef's Table, we invite you to witness it.",
    },
  },
];

function ExperienceModal({
  experience,
  onClose,
}: {
  experience: (typeof experiences)[number];
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const Icon = experience.icon;
  const { modal } = experience;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-restaurant-green border border-restaurant-gold/30"
      >
        {/* Top decorative line */}
        <div className="h-px bg-gradient-to-r from-transparent via-restaurant-gold/60 to-transparent" />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-restaurant-gold" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-restaurant-gold" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-restaurant-gold" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-restaurant-gold" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 text-restaurant-bg/40 hover:text-restaurant-gold transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8 sm:p-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <Icon className="w-8 h-8 text-restaurant-gold mb-6" />
            <h3 className="font-playfair text-3xl sm:text-4xl text-restaurant-bg mb-2">
              {experience.title}
            </h3>
            <p className="text-restaurant-gold/80 text-sm tracking-[0.2em] uppercase mb-8">
              {modal.subtitle}
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-restaurant-gold/40 via-restaurant-gold/20 to-restaurant-gold/40 mb-8 origin-left"
          />

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-restaurant-bg/60 leading-relaxed mb-10"
          >
            {modal.body}
          </motion.p>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="grid grid-cols-2 gap-4 sm:gap-6 mb-10"
          >
            {modal.highlights.map((item) => (
              <div
                key={item.label}
                className="border border-restaurant-gold/15 p-4 sm:p-5"
              >
                <span className="block text-restaurant-bg/40 text-xs tracking-[0.2em] uppercase mb-1">
                  {item.label}
                </span>
                <span className="block text-restaurant-bg font-playfair text-lg">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="border-l-2 border-restaurant-gold/40 pl-6"
          >
            <p className="font-playfair italic text-restaurant-bg/50 text-lg leading-relaxed">
              &ldquo;{modal.quote}&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <div className="h-px bg-gradient-to-r from-transparent via-restaurant-gold/60 to-transparent" />
      </motion.div>
    </motion.div>
  );
}

export default function RestaurantExperiences() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => setSelectedIndex(null), []);

  return (
    <section
      id="experiences"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-restaurant-green"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px flex-1 max-w-[80px] bg-restaurant-gold/30" />
              <span className="text-restaurant-gold text-sm tracking-[0.3em] uppercase">
                Experiences
              </span>
              <span className="h-px flex-1 max-w-[80px] bg-restaurant-gold/30" />
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-restaurant-bg mb-4">
              Beyond <span className="italic">Dining</span>
            </h2>
            <p className="text-restaurant-bg/60 max-w-lg mx-auto">
              Elevate your visit with one of our signature experiences, each
              designed to immerse you in the art of fine gastronomy.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((experience, i) => (
            <ScrollReveal key={experience.title} delay={i * 0.1}>
              <div className="relative border border-restaurant-gold/30 p-8 lg:p-10 h-full flex flex-col group hover:border-restaurant-gold/60 transition-colors">
                {/* Corner accents */}
                <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-restaurant-gold" />
                <div className="absolute -top-px -right-px w-4 h-4 border-t border-r border-restaurant-gold" />
                <div className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-restaurant-gold" />
                <div className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-restaurant-gold" />

                <experience.icon className="w-8 h-8 text-restaurant-gold mb-6" />

                <h3 className="font-playfair text-xl sm:text-2xl text-restaurant-bg mb-4">
                  {experience.title}
                </h3>

                <p className="text-restaurant-bg/50 text-sm leading-relaxed mb-6 flex-1">
                  {experience.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-restaurant-gold/20">
                  <span className="text-restaurant-gold text-xs tracking-widest uppercase">
                    {experience.detail}
                  </span>
                  <button
                    onClick={() => setSelectedIndex(i)}
                    className="text-restaurant-bg/40 text-sm hover:text-restaurant-gold transition-colors"
                  >
                    Learn more &rarr;
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <ExperienceModal
            experience={experiences[selectedIndex]}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
