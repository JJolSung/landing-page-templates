"use client";

import { useCallback } from "react";
import { GraduationCap, ArrowRight } from "lucide-react";
import useFormSubmit from "@/lib/useFormSubmit";
import SuccessToast from "@/components/shared/SuccessToast";

const footerLinks = {
  Course: [
    { label: "Curriculum", href: "#curriculum" },
    { label: "Instructor", href: "#" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#" },
  ],
  Resources: [
    { label: "Free Starter Guide", href: "#" },
    { label: "Blog", href: "#" },
    { label: "YouTube Channel", href: "#" },
    { label: "Community Discord", href: "#" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
};

export default function CourseFooter() {
  const { handleSubmit, errors, isSubmitting, isSubmitted, setSubmitted, clearError } =
    useFormSubmit({
      requiredFields: ["email"],
    });

  const handleToastClose = useCallback(() => setSubmitted(false), [setSubmitted]);

  return (
    <footer className="bg-course-indigo pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-course-amber rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-jakarta-sans text-lg font-extrabold text-white">
                FullStack Mastery
              </span>
            </div>
            <p className="text-indigo-200/60 text-sm mb-6 max-w-xs leading-relaxed">
              The most comprehensive full-stack development course. Transform
              your career with real-world skills.
            </p>

            {/* Newsletter */}
            <p className="text-sm font-medium text-indigo-200 mb-3">
              Get free coding tips weekly
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  onChange={() => clearError("email")}
                  className={`w-full px-3.5 py-2.5 bg-white/10 border rounded-lg text-white text-sm placeholder-indigo-300/40 focus:outline-none focus:border-course-amber transition-colors ${
                    errors.email ? "border-red-400" : "border-white/15"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-300 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2.5 bg-course-amber hover:bg-course-amber-dark text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-1 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-jakarta-sans font-bold text-white text-sm mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-indigo-200/60 text-sm hover:text-course-amber transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-indigo-200/40 text-sm">
            &copy; {new Date().getFullYear()} FullStack Mastery. All rights
            reserved.
          </p>
          <p className="text-indigo-200/40 text-xs">
            A landing page template by MOVA Tech
          </p>
        </div>
      </div>

      <SuccessToast
        isVisible={isSubmitted}
        onClose={handleToastClose}
        message="Subscribed! Check your inbox for our welcome email."
      />
    </footer>
  );
}
