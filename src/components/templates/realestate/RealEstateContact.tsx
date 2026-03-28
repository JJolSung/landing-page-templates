"use client";

import { useCallback } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SuccessToast from "@/components/shared/SuccessToast";
import useFormSubmit from "@/lib/useFormSubmit";

export default function RealEstateContact() {
  const { handleSubmit, errors, isSubmitting, isSubmitted, setSubmitted, clearError } =
    useFormSubmit({
      requiredFields: ["name", "email", "message"],
    });

  const handleToastClose = useCallback(() => setSubmitted(false), [setSubmitted]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-realestate-surface">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-realestate-gold text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Get in Touch
            </p>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-realestate-charcoal mb-4">
              Schedule a Consultation
            </h2>
            <p className="text-realestate-charcoal-light max-w-xl mx-auto">
              Let us help you find the perfect property. Our team is ready to
              assist with your real estate needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="font-cormorant text-2xl font-medium text-realestate-charcoal mb-6">
                  Prestige Estates
                </h3>
                <p className="text-realestate-charcoal-light text-sm leading-relaxed mb-8">
                  With over a decade of excellence in luxury real estate, we
                  connect discerning clients with extraordinary properties
                  worldwide.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-realestate-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-realestate-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-realestate-charcoal mb-0.5">
                      Visit Our Office
                    </p>
                    <p className="text-sm text-realestate-charcoal-light">
                      742 Fifth Avenue, Suite 1200
                      <br />
                      New York, NY 10019
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-realestate-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-realestate-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-realestate-charcoal mb-0.5">
                      Call Us
                    </p>
                    <a
                      href="tel:+12125550184"
                      className="text-sm text-realestate-charcoal-light hover:text-realestate-gold transition-colors"
                    >
                      +1 (212) 555-0184
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-realestate-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-realestate-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-realestate-charcoal mb-0.5">
                      Email Us
                    </p>
                    <a
                      href="mailto:inquiries@prestigeestates.com"
                      className="text-sm text-realestate-charcoal-light hover:text-realestate-gold transition-colors"
                    >
                      inquiries@prestigeestates.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-realestate-charcoal-light uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    onChange={() => clearError("name")}
                    className={`w-full px-4 py-3 bg-white border rounded-lg text-realestate-charcoal text-sm placeholder-realestate-charcoal-light/50 focus:outline-none focus:border-realestate-gold transition-colors ${
                      errors.name
                        ? "border-red-400"
                        : "border-realestate-charcoal/15"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs text-realestate-charcoal-light uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    onChange={() => clearError("email")}
                    className={`w-full px-4 py-3 bg-white border rounded-lg text-realestate-charcoal text-sm placeholder-realestate-charcoal-light/50 focus:outline-none focus:border-realestate-gold transition-colors ${
                      errors.email
                        ? "border-red-400"
                        : "border-realestate-charcoal/15"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs text-realestate-charcoal-light uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 bg-white border border-realestate-charcoal/15 rounded-lg text-realestate-charcoal text-sm placeholder-realestate-charcoal-light/50 focus:outline-none focus:border-realestate-gold transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-realestate-charcoal-light uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your ideal property..."
                  onChange={() => clearError("message")}
                  className={`w-full px-4 py-3 bg-white border rounded-lg text-realestate-charcoal text-sm placeholder-realestate-charcoal-light/50 focus:outline-none focus:border-realestate-gold transition-colors resize-none ${
                    errors.message
                      ? "border-red-400"
                      : "border-realestate-charcoal/15"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-realestate-gold text-white rounded-lg text-sm font-medium hover:bg-realestate-gold-light transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Send Inquiry"
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
      <SuccessToast
        isVisible={isSubmitted}
        onClose={handleToastClose}
        message="Thank you! A luxury advisor will contact you shortly."
      />
    </section>
  );
}
