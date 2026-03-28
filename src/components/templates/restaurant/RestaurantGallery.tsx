import ScrollReveal from "@/components/shared/ScrollReveal";

const galleryItems = [
  {
    label: "Signature Plating",
    image: "/images/restaurant/gallery-plating.webp",
    gradient: "from-restaurant-green/20 to-restaurant-green/5",
    span: "col-span-2 row-span-2",
  },
  {
    label: "Celebrations",
    image: "/images/restaurant/gallery-celebrations.webp",
    gradient: "from-restaurant-gold/20 to-restaurant-gold/5",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Garden Fresh",
    image: "/images/restaurant/gallery-garden.webp",
    gradient: "from-restaurant-green/15 to-restaurant-cream",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Wine Cellar",
    image: "/images/restaurant/gallery-wine.webp",
    gradient: "from-restaurant-green/25 to-restaurant-green/10",
    span: "col-span-1 row-span-2",
  },
  {
    label: "Live Kitchen",
    image: "/images/restaurant/gallery-kitchen.webp",
    gradient: "from-restaurant-gold/25 to-restaurant-gold/5",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Pâtisserie",
    image: "/images/restaurant/gallery-patisserie.webp",
    gradient: "from-restaurant-gold/15 to-restaurant-cream",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Mediterranean",
    image: "/images/restaurant/gallery-mediterranean.webp",
    gradient: "from-restaurant-green/20 to-restaurant-cream",
    span: "col-span-2 row-span-1",
  },
  {
    label: "Dining Room",
    image: "/images/restaurant/gallery-dining.webp",
    gradient: "from-restaurant-green/10 to-restaurant-gold/10",
    span: "col-span-1 row-span-1",
  },
];

export default function RestaurantGallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px flex-1 max-w-[80px] bg-restaurant-gold/30" />
              <span className="text-restaurant-gold text-sm tracking-[0.3em] uppercase">
                Gallery
              </span>
              <span className="h-px flex-1 max-w-[80px] bg-restaurant-gold/30" />
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-restaurant-green mb-4">
              A Visual <span className="italic">Feast</span>
            </h2>
            <p className="text-restaurant-green/60 max-w-lg mx-auto">
              Glimpses of the artistry and ambiance that await you at our table.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[180px] gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <ScrollReveal
              key={item.label}
              delay={i * 0.05}
              className={item.span}
            >
              <div
                className={`relative w-full h-full bg-gradient-to-br ${item.gradient} border border-restaurant-gold/15 overflow-hidden group cursor-pointer hover:border-restaurant-gold/40 transition-all duration-300`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:scale-105 transition-all duration-500"
                  onLoad={(e) => {
                    e.currentTarget.classList.remove("opacity-0");
                    e.currentTarget.classList.add("opacity-100");
                  }}
                />

                {/* Overlay + label (shown when no image or on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-restaurant-green/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <span className="font-playfair text-sm text-restaurant-green/60 italic group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-restaurant-gold/20 group-hover:border-restaurant-gold/50 transition-colors z-20" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-restaurant-gold/20 group-hover:border-restaurant-gold/50 transition-colors z-20" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-restaurant-gold/20 group-hover:border-restaurant-gold/50 transition-colors z-20" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-restaurant-gold/20 group-hover:border-restaurant-gold/50 transition-colors z-20" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
