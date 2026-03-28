"use client";

import { Bed, Maximize, MapPin } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const listings = [
  {
    address: "1247 Park Avenue, Manhattan",
    city: "New York, NY",
    price: "$4.8M",
    area: "3,200",
    bedrooms: 4,
    image: "/images/realestate/listing-manhattan.webp",
    gradient: "from-realestate-charcoal/10 via-realestate-gold/10 to-realestate-charcoal/5",
    tag: "Featured",
  },
  {
    address: "820 Ocean Drive, Penthouse",
    city: "Miami Beach, FL",
    price: "$7.2M",
    area: "4,800",
    bedrooms: 5,
    image: "/images/realestate/listing-miami.webp",
    gradient: "from-realestate-gold/15 via-realestate-charcoal/5 to-realestate-gold/10",
    tag: "New",
  },
  {
    address: "15 Belvedere Crest",
    city: "Beverly Hills, CA",
    price: "$12.5M",
    area: "8,400",
    bedrooms: 7,
    image: "/images/realestate/listing-beverlyhills.webp",
    gradient: "from-realestate-charcoal/5 via-realestate-gold/15 to-realestate-charcoal/10",
    tag: "Exclusive",
  },
  {
    address: "The Astor Residence, Unit 42A",
    city: "Chicago, IL",
    price: "$2.1M",
    area: "2,600",
    bedrooms: 3,
    image: "/images/realestate/listing-chicago.webp",
    gradient: "from-realestate-gold/10 via-realestate-charcoal/10 to-realestate-gold/5",
    tag: "Reduced",
  },
];

export default function RealEstateListings() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-realestate-gold text-sm font-medium uppercase tracking-[0.2em] mb-3">
                Featured Properties
              </p>
              <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-realestate-charcoal">
                Exceptional Residences
              </h2>
            </div>
            <a
              href="#"
              className="hidden sm:block text-sm text-realestate-charcoal-light border-b border-realestate-gold pb-0.5 hover:text-realestate-gold transition-colors"
            >
              View All Properties
            </a>
          </div>
        </ScrollReveal>

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {listings.map((listing, i) => (
            <ScrollReveal
              key={listing.address}
              delay={i * 0.1}
              className="flex-shrink-0 w-[320px] sm:w-[360px] snap-start"
            >
              <a href="#" className="group block">
                {/* Image with gradient fallback */}
                <div className={`relative h-64 rounded-xl bg-gradient-to-br ${listing.gradient} mb-4 overflow-hidden`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={listing.image}
                    alt={listing.address}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:scale-105"
                    onLoad={(e) => {
                      e.currentTarget.classList.remove("opacity-0");
                      e.currentTarget.classList.add("opacity-100");
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-realestate-surface/30" />
                  {/* Tag */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-realestate-charcoal">
                    {listing.tag}
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-realestate-charcoal/0 group-hover:bg-realestate-charcoal/10 transition-colors duration-300" />
                </div>

                {/* Info */}
                <div className="px-1">
                  <div className="flex items-center gap-1.5 text-realestate-charcoal-light text-xs mb-1.5">
                    <MapPin className="w-3 h-3" />
                    {listing.city}
                  </div>
                  <h3 className="font-cormorant text-xl font-medium text-realestate-charcoal mb-2 group-hover:text-realestate-gold transition-colors">
                    {listing.address}
                  </h3>
                  <p className="font-cormorant text-2xl text-realestate-gold font-semibold mb-3">
                    {listing.price}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-realestate-charcoal-light">
                    <span className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4" />
                      {listing.bedrooms} Beds
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Maximize className="w-4 h-4" />
                      {listing.area} sq ft
                    </span>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
