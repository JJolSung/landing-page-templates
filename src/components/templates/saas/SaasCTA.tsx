"use client";

import { useCallback } from "react";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SuccessToast from "@/components/shared/SuccessToast";
import useFormSubmit from "@/lib/useFormSubmit";

export default function SaasCTA() {
  const { handleSubmit, errors, isSubmitting, isSubmitted, setSubmitted, clearError } =
    useFormSubmit({
      requiredFields: ["email"],
    });

  const handleToastClose = useCallback(() => setSubmitted(false), [setSubmitted]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-saas-accent/5 rounded-3xl blur-3xl" />
          <div className="relative bg-saas-surface border border-saas-border rounded-2xl p-8 sm:p-12">
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Join thousands of teams already shipping faster. Start your free
              trial today.
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
                  className={`w-full px-4 py-3 bg-saas-bg border rounded-lg text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-saas-accent transition-colors ${
                    errors.email ? "border-red-500" : "border-saas-border"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1 text-left">
                    {errors.email}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-saas-accent text-white rounded-lg text-sm font-medium hover:bg-saas-accent-light transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </ScrollReveal>
      <SuccessToast isVisible={isSubmitted} onClose={handleToastClose} />
    </section>
  );
}
