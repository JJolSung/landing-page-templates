import ScrollReveal from "@/components/shared/ScrollReveal";
import { Check, Shield, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Self-Paced",
    price: "$297",
    description: "Learn at your own speed with full course access",
    featured: false,
    features: [
      "Full course access (40+ hours)",
      "8 hands-on projects",
      "Lifetime access to content",
      "Private community access",
      "Certificate of completion",
      "Course updates included",
    ],
  },
  {
    name: "With Mentoring",
    price: "$497",
    description: "Accelerate your learning with 1-on-1 guidance",
    featured: true,
    features: [
      "Everything in Self-Paced",
      "Weekly 1-on-1 mentoring calls",
      "Code reviews on all projects",
      "Career coaching & resume review",
      "Priority community support",
      "Job referral network access",
    ],
  },
];

export default function CoursePricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-course-amber/10 text-course-amber font-semibold text-sm mb-4">
              Pricing
            </span>
            <h2 className="font-jakarta-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-course-indigo mb-4">
              Invest in Your Future
            </h2>
            <p className="text-course-text/60 max-w-2xl mx-auto text-lg">
              Choose the plan that fits your learning style. Both include full
              course access and lifetime updates.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.15}>
              <div
                className={`relative rounded-2xl p-8 sm:p-10 h-full flex flex-col ${
                  plan.featured
                    ? "bg-course-bg border-2 border-course-amber shadow-xl shadow-course-amber/10"
                    : "bg-course-bg border border-course-border"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-course-amber text-white text-sm font-bold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-jakarta-sans text-xl font-bold text-course-indigo mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-course-text/50 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-jakarta-sans text-5xl font-extrabold text-course-indigo">
                      {plan.price}
                    </span>
                    <span className="text-course-text/40 text-sm">
                      / one-time
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-course-text/70"
                    >
                      <Check className="w-5 h-5 text-course-amber flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#enroll"
                  className={`w-full py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-colors ${
                    plan.featured
                      ? "bg-course-amber hover:bg-course-amber-dark text-white shadow-lg shadow-course-amber/25"
                      : "bg-course-indigo hover:bg-course-indigo-light text-white"
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-2 mt-10 text-sm text-course-text/50">
            <Shield className="w-4 h-4 text-course-amber" />
            <span>30-day money-back guarantee — no questions asked</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
