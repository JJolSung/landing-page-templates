import ScrollReveal from "@/components/shared/ScrollReveal";
import { Wine, UtensilsCrossed, ChefHat } from "lucide-react";

const experiences = [
  {
    icon: UtensilsCrossed,
    title: "Private Dining",
    description:
      "Host an unforgettable evening in our exclusive private dining room, accommodating up to 16 guests. Enjoy a bespoke menu crafted by Chef Laurent, with dedicated sommelier service and personalized table settings.",
    detail: "From 16 guests",
  },
  {
    icon: Wine,
    title: "Wine Pairing",
    description:
      "Let our sommelier guide you through a curated journey of five exceptional wines, each selected to complement the nuances of your tasting menu. Discover rare vintages from our cellar of over 800 labels.",
    detail: "5-course journey",
  },
  {
    icon: ChefHat,
    title: "Chef's Table",
    description:
      "Sit at the heart of our kitchen for an intimate 8-course experience. Watch Chef Laurent and his team create each dish before your eyes, with personal explanations of technique, inspiration, and provenance.",
    detail: "8-course experience",
  },
];

export default function RestaurantExperiences() {
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
                  <a
                    href="#"
                    className="text-restaurant-bg/40 text-sm hover:text-restaurant-gold transition-colors"
                  >
                    Learn more &rarr;
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
