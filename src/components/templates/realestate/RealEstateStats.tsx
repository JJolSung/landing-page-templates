"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import CountUp from "@/components/shared/CountUp";

const stats = [
  { end: 10, suffix: "+", label: "Years of Experience" },
  { end: 2500, suffix: "+", label: "Properties Sold" },
  { end: 98, suffix: "%", label: "Client Satisfaction" },
  { end: 25, suffix: "", label: "Industry Awards" },
];

export default function RealEstateStats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <CountUp
                  end={stat.end}
                  suffix={stat.suffix}
                  className="font-cormorant text-5xl sm:text-6xl font-light text-realestate-gold"
                />
                <div className="mt-2 w-8 h-px bg-realestate-gold/40 mx-auto" />
                <p className="mt-3 text-sm text-realestate-charcoal-light uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
