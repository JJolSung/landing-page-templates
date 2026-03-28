"use client";

import { useCallback } from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SuccessToast from "@/components/shared/SuccessToast";
import useFormSubmit from "@/lib/useFormSubmit";

export default function AppWaitlist() {
  const { handleSubmit, errors, isSubmitting, isSubmitted, setSubmitted, clearError } =
    useFormSubmit({
      requiredFields: ["email"],
    });

  const handleToastClose = useCallback(() => setSubmitted(false), [setSubmitted]);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient blob background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-app-indigo/15 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-app-purple/15 rounded-full blur-[100px]" />

      <ScrollReveal>
        <div className="relative max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-app-border text-sm text-slate-400 mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            500K+ users and counting
          </div>

          <h2 className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Join{" "}
            <span className="bg-gradient-to-r from-app-indigo to-app-purple bg-clip-text text-transparent">
              500K+ Users
            </span>
          </h2>

          <p className="text-slate-400 mb-10 max-w-md mx-auto">
            Sign up for early access to new features, exclusive tips, and
            special offers. No spam, ever.
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
                className={`w-full px-5 py-3.5 bg-app-surface border rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-app-indigo transition-colors ${
                  errors.email ? "border-red-500" : "border-app-border"
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1.5 text-left">
                  {errors.email}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3.5 bg-gradient-to-r from-app-indigo to-app-purple text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60 shadow-lg shadow-app-indigo/25"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-slate-600 text-xs mt-4">
            Free forever. No credit card required.
          </p>
        </div>
      </ScrollReveal>

      <SuccessToast
        isVisible={isSubmitted}
        onClose={handleToastClose}
        message="You're on the list! We'll be in touch soon."
      />
    </section>
  );
}
