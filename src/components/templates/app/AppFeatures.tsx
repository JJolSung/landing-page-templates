import ScrollReveal from "@/components/shared/ScrollReveal";
import { PieChart, Receipt, TrendingUp } from "lucide-react";

const features = [
  {
    icon: PieChart,
    title: "Smart Budgeting",
    description:
      "AI-powered budgets that adapt to your spending habits. Set limits, get alerts, and watch your savings grow effortlessly.",
  },
  {
    icon: Receipt,
    title: "Expense Tracking",
    description:
      "Automatically categorize every transaction. Scan receipts, split bills, and never lose track of where your money goes.",
  },
  {
    icon: TrendingUp,
    title: "Investment Insights",
    description:
      "Monitor your portfolio in real-time. Get personalized recommendations and track your path to financial freedom.",
  },
];

export default function AppFeatures() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-app-indigo to-app-purple bg-clip-text text-transparent mb-3">
            Features
          </p>
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything you need to manage money
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Powerful tools wrapped in a simple interface that makes finance feel
            effortless.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, i) => (
          <ScrollReveal key={feature.title} delay={i * 0.1}>
            <div className="relative group rounded-2xl border border-app-border bg-app-surface/50 p-6 lg:p-8 h-full hover:border-app-indigo/50 transition-colors">
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-app-indigo/5 to-app-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-app-indigo to-app-purple flex items-center justify-center mb-5 shadow-lg shadow-app-indigo/20">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-manrope text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
