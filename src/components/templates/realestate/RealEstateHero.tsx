import ScrollReveal from "@/components/shared/ScrollReveal";
import { Search } from "lucide-react";

export default function RealEstateHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Subtle decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-realestate-gold/30" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-realestate-gold text-sm font-medium uppercase tracking-[0.3em] mb-6">
            Luxury Real Estate
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-cormorant text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-realestate-charcoal leading-[1.05] mb-6 tracking-[-0.01em]">
            Find Your Dream{" "}
            <span className="text-realestate-gold italic">Home</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl text-realestate-charcoal-light max-w-2xl mx-auto mb-14 leading-relaxed">
            Discover extraordinary properties in the world&apos;s most coveted
            neighborhoods. Your perfect residence awaits.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl shadow-black/5 border border-realestate-surface p-3 sm:p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-xs text-realestate-charcoal-light uppercase tracking-wider mb-1.5 text-left pl-3">
                  Location
                </label>
                <select className="w-full px-4 py-2.5 bg-realestate-surface rounded-lg text-realestate-charcoal text-sm border-0 focus:outline-none focus:ring-2 focus:ring-realestate-gold/30 appearance-none cursor-pointer">
                  <option value="">All Locations</option>
                  <option value="manhattan">Manhattan, NY</option>
                  <option value="beverly-hills">Beverly Hills, CA</option>
                  <option value="miami-beach">Miami Beach, FL</option>
                  <option value="aspen">Aspen, CO</option>
                  <option value="hamptons">The Hamptons, NY</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-xs text-realestate-charcoal-light uppercase tracking-wider mb-1.5 text-left pl-3">
                  Property Type
                </label>
                <select className="w-full px-4 py-2.5 bg-realestate-surface rounded-lg text-realestate-charcoal text-sm border-0 focus:outline-none focus:ring-2 focus:ring-realestate-gold/30 appearance-none cursor-pointer">
                  <option value="">All Types</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="villa">Villa</option>
                  <option value="estate">Estate</option>
                  <option value="condo">Condominium</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-xs text-realestate-charcoal-light uppercase tracking-wider mb-1.5 text-left pl-3">
                  Price Range
                </label>
                <select className="w-full px-4 py-2.5 bg-realestate-surface rounded-lg text-realestate-charcoal text-sm border-0 focus:outline-none focus:ring-2 focus:ring-realestate-gold/30 appearance-none cursor-pointer">
                  <option value="">Any Price</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-3m">$1M - $3M</option>
                  <option value="3m-5m">$3M - $5M</option>
                  <option value="5m-10m">$5M - $10M</option>
                  <option value="10m+">$10M+</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full sm:w-auto px-8 py-2.5 bg-realestate-gold text-white rounded-lg text-sm font-medium hover:bg-realestate-gold-light transition-colors flex items-center justify-center gap-2">
                  <Search className="w-4 h-4" />
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <div className="w-12 h-px bg-realestate-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-realestate-gold/40" />
        <div className="w-12 h-px bg-realestate-gold/40" />
      </div>
    </section>
  );
}
