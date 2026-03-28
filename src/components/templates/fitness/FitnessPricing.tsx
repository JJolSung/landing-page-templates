import ScrollReveal from "@/components/shared/ScrollReveal";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "Full gym floor access",
      "Locker room & showers",
      "Free WiFi",
      "2 guest passes per month",
    ],
    cta: "GET STARTED",
    popular: false,
  },
  {
    name: "Premium",
    price: "$59",
    period: "/month",
    description: "Our most popular membership",
    features: [
      "Everything in Basic",
      "All group classes included",
      "1 personal training session/month",
      "Nutrition consultation",
      "Sauna & recovery room",
      "Priority booking",
    ],
    cta: "JOIN NOW",
    popular: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    description: "For serious athletes",
    features: [
      "Everything in Premium",
      "4 personal training sessions/month",
      "Custom meal plans",
      "InBody composition scans",
      "Competition prep support",
      "VIP lounge access",
      "Unlimited guest passes",
    ],
    cta: "GO ELITE",
    popular: false,
  },
];

export default function FitnessPricing() {
  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-fitness-bg overflow-hidden">
      {/* Diagonal top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-fitness-surface"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10 pt-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-oswald text-sm uppercase tracking-[0.3em] text-fitness-neon mb-3">
              Membership Plans
            </p>
            <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white">
              Choose Your Plan
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative h-full flex flex-col p-6 lg:p-8 ${
                  plan.popular
                    ? "border-2 border-fitness-neon bg-fitness-surface shadow-[0_0_40px_rgba(57,255,20,0.1)]"
                    : "border border-fitness-border bg-fitness-surface/50"
                }`}
                style={{
                  clipPath: plan.popular
                    ? "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
                }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-fitness-neon text-black text-center py-1.5 font-oswald text-xs uppercase tracking-widest font-bold">
                    Best Value
                  </div>
                )}

                <div className={`mb-6 ${plan.popular ? "mt-6" : ""}`}>
                  <h3 className="font-oswald text-xl font-bold uppercase text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-zinc-500">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="font-oswald text-5xl font-bold text-white">
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
                      <Check className="w-4 h-4 text-fitness-neon flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={`block w-full py-3.5 text-center font-oswald text-sm uppercase tracking-wider font-bold transition-colors ${
                    plan.popular
                      ? "bg-fitness-neon text-black hover:bg-fitness-neon-dim"
                      : "bg-fitness-bg text-white border border-fitness-border hover:border-fitness-neon hover:text-fitness-neon"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
