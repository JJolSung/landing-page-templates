import ScrollReveal from "@/components/shared/ScrollReveal";
import { Home, DollarSign, Key } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Buy a Property",
    description:
      "Browse our curated portfolio of luxury homes, penthouses, and estates. Our advisors guide you through every step, from viewings to closing.",
  },
  {
    icon: DollarSign,
    title: "Sell Your Property",
    description:
      "Maximize your property's value with our expert market analysis, professional staging, and access to an exclusive network of qualified buyers.",
  },
  {
    icon: Key,
    title: "Rent Premium Spaces",
    description:
      "Discover exceptional rental properties in prime locations. Short-term luxury retreats or long-term residences tailored to your lifestyle.",
  },
];

export default function RealEstateServices() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-realestate-surface">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-realestate-gold text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Our Services
            </p>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-realestate-charcoal mb-4">
              Tailored Real Estate Solutions
            </h2>
            <p className="text-realestate-charcoal-light max-w-xl mx-auto">
              Whether buying, selling, or renting, we provide a seamless and
              sophisticated experience at every stage.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.15}>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-realestate-gold/30 mb-6 group-hover:bg-realestate-gold/10 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-realestate-gold" />
                </div>
                <h3 className="font-cormorant text-2xl font-medium text-realestate-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-realestate-charcoal-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
