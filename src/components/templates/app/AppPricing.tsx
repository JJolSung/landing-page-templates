import ScrollReveal from "@/components/shared/ScrollReveal";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For getting started with personal finance",
    features: [
      "Expense tracking",
      "3 budget categories",
      "Monthly spending report",
      "1 bank connection",
      "Basic insights",
    ],
    cta: "Start Free",
    premium: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "/month",
    description: "For serious money management",
    features: [
      "Everything in Free",
      "Unlimited budgets",
      "AI-powered insights",
      "Investment tracking",
      "Unlimited bank connections",
      "Bill reminders",
      "Custom goal planning",
      "Priority support",
    ],
    cta: "Start Free Trial",
    premium: true,
  },
];

export default function AppPricing() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-app-indigo to-app-purple bg-clip-text text-transparent mb-3">
            Pricing
          </p>
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Start free and upgrade when you need more. No hidden fees, cancel
            anytime.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {plans.map((plan, i) => (
          <ScrollReveal key={plan.name} delay={i * 0.1}>
            <div
              className={`relative rounded-2xl p-6 lg:p-8 h-full flex flex-col ${
                plan.premium
                  ? "bg-app-surface border-2 border-transparent"
                  : "bg-app-surface/50 border border-app-border"
              }`}
              style={
                plan.premium
                  ? {
                      backgroundImage:
                        "linear-gradient(#1e293b, #1e293b), linear-gradient(135deg, #6366f1, #a855f7)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }
                  : undefined
              }
            >
              {plan.premium && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-app-indigo to-app-purple rounded-full text-xs font-semibold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-manrope text-lg font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-500">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="font-manrope text-4xl font-extrabold text-white">
                  {plan.price}
                </span>
                <span className="text-slate-500 text-sm ml-1">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.premium
                          ? "bg-gradient-to-br from-app-indigo to-app-purple"
                          : "bg-app-border"
                      }`}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full py-3.5 rounded-xl text-sm font-semibold text-center transition-all ${
                  plan.premium
                    ? "bg-gradient-to-r from-app-indigo to-app-purple text-white hover:opacity-90 shadow-lg shadow-app-indigo/25"
                    : "bg-app-bg text-slate-300 border border-app-border hover:border-app-indigo/50"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
