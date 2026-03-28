import ScrollReveal from "@/components/shared/ScrollReveal";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function RestaurantInfo() {
  return (
    <section id="info" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-px flex-1 max-w-[80px] bg-restaurant-gold/30" />
              <span className="text-restaurant-gold text-sm tracking-[0.3em] uppercase">
                Visit Us
              </span>
              <span className="h-px flex-1 max-w-[80px] bg-restaurant-gold/30" />
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-restaurant-green">
              Find <span className="italic">Us</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Address & Hours */}
          <ScrollReveal direction="left">
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-restaurant-gold" />
                  <h3 className="font-playfair text-xl text-restaurant-green">
                    Location
                  </h3>
                </div>
                <div className="pl-8 text-restaurant-green/70 leading-relaxed">
                  <p>127 Rue de la Gastronomie</p>
                  <p>New York, NY 10013</p>
                  <p className="mt-2 text-sm text-restaurant-green/50">
                    Valet parking available nightly
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-restaurant-gold" />
                  <h3 className="font-playfair text-xl text-restaurant-green">
                    Hours
                  </h3>
                </div>
                <div className="pl-8 space-y-2">
                  <div className="flex justify-between text-sm max-w-xs">
                    <span className="text-restaurant-green/70">
                      Monday - Tuesday
                    </span>
                    <span className="text-restaurant-green/50 italic">
                      Closed
                    </span>
                  </div>
                  <div className="flex justify-between text-sm max-w-xs">
                    <span className="text-restaurant-green/70">
                      Wednesday - Thursday
                    </span>
                    <span className="text-restaurant-green/70">
                      6:00 PM - 10:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-sm max-w-xs">
                    <span className="text-restaurant-green/70">
                      Friday - Saturday
                    </span>
                    <span className="text-restaurant-green/70">
                      5:30 PM - 11:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-sm max-w-xs">
                    <span className="text-restaurant-green/70">Sunday</span>
                    <span className="text-restaurant-green/70">
                      5:30 PM - 9:30 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Contact */}
          <ScrollReveal direction="right">
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-5 h-5 text-restaurant-gold" />
                  <h3 className="font-playfair text-xl text-restaurant-green">
                    Reservations
                  </h3>
                </div>
                <div className="pl-8 space-y-2">
                  <a
                    href="tel:+12125550187"
                    className="block text-restaurant-green/70 hover:text-restaurant-gold transition-colors"
                  >
                    +1 (212) 555-0187
                  </a>
                  <p className="text-sm text-restaurant-green/50">
                    Available Wednesday through Sunday, 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-restaurant-gold" />
                  <h3 className="font-playfair text-xl text-restaurant-green">
                    Contact
                  </h3>
                </div>
                <div className="pl-8 space-y-2">
                  <a
                    href="mailto:reservations@maisonlaurent.com"
                    className="block text-restaurant-green/70 hover:text-restaurant-gold transition-colors"
                  >
                    reservations@maisonlaurent.com
                  </a>
                  <a
                    href="mailto:events@maisonlaurent.com"
                    className="block text-restaurant-green/70 hover:text-restaurant-gold transition-colors"
                  >
                    events@maisonlaurent.com
                  </a>
                  <p className="text-sm text-restaurant-green/50 mt-3">
                    For private events and large party bookings, please email
                    our events team at least two weeks in advance.
                  </p>
                </div>
              </div>

              {/* Decorative map placeholder */}
              <div className="relative border border-restaurant-gold/20 p-6 bg-restaurant-green/5">
                <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-restaurant-gold" />
                <div className="absolute -top-px -right-px w-4 h-4 border-t border-r border-restaurant-gold" />
                <div className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-restaurant-gold" />
                <div className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-restaurant-gold" />
                <div className="flex items-center justify-center py-8">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-restaurant-gold/40 mx-auto mb-3" />
                    <p className="font-playfair text-sm text-restaurant-green/40 italic">
                      TriBeCa, New York City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
