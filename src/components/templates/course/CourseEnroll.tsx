"use client";

import { useCallback } from "react";
import { ArrowRight, Users } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SuccessToast from "@/components/shared/SuccessToast";
import useFormSubmit from "@/lib/useFormSubmit";

export default function CourseEnroll() {
  const { handleSubmit, errors, isSubmitting, isSubmitted, setSubmitted, clearError } =
    useFormSubmit({
      requiredFields: ["name", "email"],
    });

  const handleToastClose = useCallback(() => setSubmitted(false), [setSubmitted]);

  return (
    <section id="enroll" className="py-24 px-4 sm:px-6 lg:px-8 bg-course-indigo relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-course-amber/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />

      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-jakarta-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Ready to Start?
            </h2>
            <p className="text-indigo-200 text-lg max-w-xl mx-auto mb-6">
              Take the first step toward becoming a full-stack developer.
              Reserve your spot in the next cohort today.
            </p>

            {/* Spots left counter */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Users className="w-4 h-4 text-course-amber" />
              <span className="text-white text-sm font-medium">
                Only <span className="text-course-amber font-bold">12 spots</span> left in this cohort
              </span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="enroll-name"
                  className="block text-sm font-medium text-indigo-200 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="enroll-name"
                  name="name"
                  placeholder="Enter your full name"
                  onChange={() => clearError("name")}
                  className={`w-full px-4 py-3.5 bg-white/10 border rounded-xl text-white placeholder-indigo-300/50 text-sm focus:outline-none focus:border-course-amber transition-colors ${
                    errors.name
                      ? "border-red-400"
                      : "border-white/20 focus:border-course-amber"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-300 text-xs mt-1.5">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="enroll-email"
                  className="block text-sm font-medium text-indigo-200 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="enroll-email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={() => clearError("email")}
                  className={`w-full px-4 py-3.5 bg-white/10 border rounded-xl text-white placeholder-indigo-300/50 text-sm focus:outline-none focus:border-course-amber transition-colors ${
                    errors.email
                      ? "border-red-400"
                      : "border-white/20 focus:border-course-amber"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-300 text-xs mt-1.5">{errors.email}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-course-amber hover:bg-course-amber-dark text-white rounded-xl font-bold text-base transition-colors flex items-center justify-center gap-2 shadow-lg shadow-course-amber/25 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Enroll Now — Reserve Your Spot
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-indigo-300/60 text-xs mt-4">
              By enrolling, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <SuccessToast
        isVisible={isSubmitted}
        onClose={handleToastClose}
        message="You're enrolled! Check your email for next steps."
      />
    </section>
  );
}
