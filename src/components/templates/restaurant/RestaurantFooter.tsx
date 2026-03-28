import { Instagram, Facebook, Twitter } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
];

export default function RestaurantFooter() {
  return (
    <footer className="border-t border-restaurant-gold/20 py-16 px-4 sm:px-6 lg:px-8 bg-restaurant-green">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Restaurant name */}
          <h2 className="font-playfair text-3xl sm:text-4xl text-restaurant-bg mb-2 italic">
            Maison Laurent
          </h2>
          <p className="text-restaurant-bg/40 text-sm tracking-widest uppercase mb-8">
            Fine Dining &middot; Est. 1987
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-16 bg-restaurant-gold/30" />
            <span className="w-2 h-2 rotate-45 border border-restaurant-gold/50" />
            <span className="h-px w-16 bg-restaurant-gold/30" />
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2 mb-10">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="p-2 text-restaurant-bg/40 hover:text-restaurant-gold transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-restaurant-bg/30 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Maison Laurent. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
