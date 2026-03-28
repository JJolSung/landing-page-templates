import ScrollReveal from "@/components/shared/ScrollReveal";

export default function RestaurantHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Subtle pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1a3a2a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative gold border corners */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-restaurant-gold hidden md:block" />
      <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-restaurant-gold hidden md:block" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-restaurant-gold hidden md:block" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-restaurant-gold hidden md:block" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-restaurant-gold" />
            <span className="text-restaurant-gold text-sm tracking-[0.3em] uppercase font-lato">
              Est. 1987
            </span>
            <span className="h-px w-12 bg-restaurant-gold" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-restaurant-green leading-[1.1] mb-6">
            A Taste of
            <br />
            <span className="italic text-restaurant-gold">Perfection</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl text-restaurant-green/60 max-w-xl mx-auto mb-12 leading-relaxed">
            Where culinary artistry meets timeless elegance. Experience the
            finest seasonal ingredients, crafted with passion and served with
            grace.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#reservation"
              className="px-10 py-4 bg-restaurant-green text-restaurant-bg font-lato text-sm tracking-widest uppercase hover:bg-restaurant-green-light transition-colors"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="px-10 py-4 border border-restaurant-gold text-restaurant-green font-lato text-sm tracking-widest uppercase hover:bg-restaurant-gold/10 transition-colors"
            >
              View Menu
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Decorative scroll indicator */}
      <ScrollReveal delay={0.5} className="absolute bottom-12">
        <div className="flex flex-col items-center gap-2">
          <span className="text-restaurant-green/40 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-restaurant-gold/40" />
        </div>
      </ScrollReveal>
    </section>
  );
}
