"use client";

import { useCallback } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SuccessToast from "@/components/shared/SuccessToast";
import useFormSubmit from "@/lib/useFormSubmit";
import { ArrowRight } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

const links: Record<string, FooterLink[]> = {
  About: [
    { label: "Our Story", href: "#" },
    { label: "Leadership Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Partnerships", href: "#" },
  ],
  Services: [
    { label: "Buy a Property", href: "#" },
    { label: "Sell a Property", href: "#" },
    { label: "Luxury Rentals", href: "#" },
    { label: "Property Management", href: "#" },
    { label: "Market Analysis", href: "#" },
  ],
  Contact: [
    { label: "742 Fifth Avenue, Suite 1200", href: "#" },
    { label: "New York, NY 10019", href: "#" },
    { label: "+1 (212) 555-0184", href: "tel:+12125550184" },
    { label: "inquiries@prestigeestates.com", href: "mailto:inquiries@prestigeestates.com" },
  ],
};

export default function RealEstateFooter() {
  const { handleSubmit, errors, isSubmitting, isSubmitted, setSubmitted, clearError } =
    useFormSubmit({
      requiredFields: ["newsletter-email"],
    });

  const handleToastClose = useCallback(() => setSubmitted(false), [setSubmitted]);

  return (
    <footer className="bg-realestate-charcoal text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="font-cormorant text-lg font-medium text-white mb-5 tracking-wide">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-white/50 hover:text-realestate-gold transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Newsletter */}
        <ScrollReveal>
          <div className="border-t border-white/10 pt-10 mb-10">
            <div className="max-w-lg mx-auto text-center">
              <h4 className="font-cormorant text-2xl font-light text-white mb-2">
                Stay Informed
              </h4>
              <p className="text-white/50 text-sm mb-5">
                Subscribe to receive exclusive listings and market insights.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="flex-1">
                  <input
                    type="email"
                    name="newsletter-email"
                    placeholder="Enter your email"
                    onChange={() => clearError("newsletter-email")}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white text-sm placeholder-white/30 focus:outline-none focus:border-realestate-gold transition-colors ${
                      errors["newsletter-email"]
                        ? "border-red-400"
                        : "border-white/15"
                    }`}
                  />
                  {errors["newsletter-email"] && (
                    <p className="text-red-400 text-xs mt-1 text-left">
                      {errors["newsletter-email"]}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-realestate-gold text-white rounded-lg text-sm font-medium hover:bg-realestate-gold-light transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-cormorant text-lg font-medium tracking-wide">
            Prestige <span className="text-realestate-gold">Estates</span>
          </p>
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Prestige Estates. All rights
            reserved.
          </p>
        </div>
      </div>
      <SuccessToast
        isVisible={isSubmitted}
        onClose={handleToastClose}
        message="Welcome! You've been subscribed to our newsletter."
      />
    </footer>
  );
}
