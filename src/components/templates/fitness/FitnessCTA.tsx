"use client";

import { useCallback } from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SuccessToast from "@/components/shared/SuccessToast";
import useFormSubmit from "@/lib/useFormSubmit";

export default function FitnessCTA() {
  const { handleSubmit, errors, isSubmitting, isSubmitted, setSubmitted, clearError } =
    useFormSubmit({
      requiredFields: ["name", "email", "phone"],
    });

  const handleToastClose = useCallback(() => setSubmitted(false), [setSubmitted]);

  return (
    <section id="cta" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-fitness-bg overflow-hidden">
      {/* Diagonal top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-fitness-surface"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      />

      {/* Background neon glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fitness-neon/5 rounded-full blur-[120px]" />

      <ScrollReveal>
        <div className="max-w-2xl mx-auto text-center relative z-10 pt-12">
          <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white mb-4">
            Your First Week Is{" "}
            <span className="text-fitness-neon">Free</span>
          </h2>
          <p className="text-zinc-400 mb-10 max-w-md mx-auto">
            No commitment. No credit card. Just show up, put in the work, and
            see the results for yourself.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-md mx-auto"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={() => clearError("name")}
                className={`w-full px-4 py-3.5 bg-fitness-surface border text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-fitness-neon transition-colors font-roboto ${
                  errors.name ? "border-red-500" : "border-fitness-border"
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1 text-left">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={() => clearError("email")}
                className={`w-full px-4 py-3.5 bg-fitness-surface border text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-fitness-neon transition-colors font-roboto ${
                  errors.email ? "border-red-500" : "border-fitness-border"
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1 text-left">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={() => clearError("phone")}
                className={`w-full px-4 py-3.5 bg-fitness-surface border text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-fitness-neon transition-colors font-roboto ${
                  errors.phone ? "border-red-500" : "border-fitness-border"
                }`}
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1 text-left">
                  {errors.phone}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-fitness-neon text-black font-oswald text-lg uppercase font-bold tracking-wider hover:bg-fitness-neon-dim transition-colors flex items-center justify-center gap-3 disabled:opacity-60"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  Start Now
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </ScrollReveal>
      <SuccessToast
        isVisible={isSubmitted}
        onClose={handleToastClose}
        message="Welcome to the team! We'll reach out within 24 hours."
      />
    </section>
  );
}
