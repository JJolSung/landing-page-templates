import ScrollReveal from "@/components/shared/ScrollReveal";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individuals getting started",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "24-hour support response",
      "1 team member",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "1-hour support response",
      "Up to 10 team members",
      "Custom integrations",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Dedicated support",
      "Custom SLA",
      "SSO & SAML",
      "Audit logs",
      "On-premise option",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function SaasPricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-saas-accent text-sm font-medium uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, i) => (
          <ScrollReveal key={plan.name} delay={i * 0.1}>
            <div
              className={`relative rounded-xl p-6 lg:p-8 h-full flex flex-col ${
                plan.popular
                  ? "border-2 border-saas-accent bg-saas-surface"
                  : "border border-saas-border bg-saas-surface/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-saas-accent rounded-full text-xs font-medium text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-space-grotesk text-lg font-semibold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-zinc-500">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="font-space-grotesk text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-zinc-500 text-sm ml-1">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <Check className="w-4 h-4 text-saas-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-saas-accent text-white hover:bg-saas-accent-light"
                    : "bg-saas-bg text-zinc-300 border border-saas-border hover:border-zinc-600"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
