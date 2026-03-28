"use client";

import { useCallback } from "react";
import { Gift, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SuccessToast from "@/components/shared/SuccessToast";
import useFormSubmit from "@/lib/useFormSubmit";

export default function EcommerceCTA() {
  const { handleSubmit, errors, isSubmitting, isSubmitted, setSubmitted, clearError } =
    useFormSubmit({
      requiredFields: ["email"],
    });

  const handleToastClose = useCallback(() => setSubmitted(false), [setSubmitted]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto relative">
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-ecommerce-coral/20 rounded-3xl blur-3xl" />

          <div className="relative bg-gradient-to-br from-ecommerce-coral via-ecommerce-coral-dark to-rose-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm">
                <Gift className="w-4 h-4" />
                Limited Time Offer
              </div>

              <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Free Custom Engraving
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
                Order your AuraSound Pro this week and get free personalized
                engraving. Enter your email to be notified when stock is
                available.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={() => clearError("email")}
                    className={`w-full px-4 py-3.5 bg-white/10 border rounded-full text-white text-sm placeholder-white/50 focus:outline-none focus:border-white focus:bg-white/15 transition-colors backdrop-blur-sm ${
                      errors.email ? "border-yellow-300" : "border-white/20"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-yellow-200 text-xs mt-1.5 text-left pl-4">
                      {errors.email}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3.5 bg-white text-ecommerce-coral rounded-full text-sm font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-ecommerce-coral/30 border-t-ecommerce-coral rounded-full animate-spin" />
                  ) : (
                    <>
                      Notify Me
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </ScrollReveal>
      <SuccessToast
        isVisible={isSubmitted}
        onClose={handleToastClose}
        message="You're on the list! We'll notify you when stock is available."
      />
    </section>
  );
}
