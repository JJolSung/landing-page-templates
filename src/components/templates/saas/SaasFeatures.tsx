import ScrollReveal from "@/components/shared/ScrollReveal";
import {
  Zap,
  Shield,
  BarChart3,
  Users,
  GitBranch,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built on edge infrastructure for sub-100ms response times globally.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with end-to-end encryption and role-based access.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Real-time dashboards and custom reports to drive data-informed decisions.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Built for teams with real-time editing, comments, and @mentions.",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description:
      "Track every change with built-in versioning and rollback capabilities.",
  },
  {
    icon: Clock,
    title: "99.99% Uptime",
    description:
      "Reliable infrastructure with automatic failover and zero-downtime deploys.",
  },
];

export default function SaasFeatures() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-saas-accent text-base font-medium uppercase tracking-wider mb-3">
            Features
          </p>
          <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-white">
            Everything you need to ship
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <ScrollReveal key={feature.title} delay={i * 0.08}>
            <div className="p-6 rounded-xl border border-saas-border bg-saas-surface/50 hover:border-saas-accent/30 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-saas-accent/10 flex items-center justify-center mb-4 group-hover:bg-saas-accent/20 transition-colors">
                <feature.icon className="w-5 h-5 text-saas-accent" />
              </div>
              <h3 className="font-space-grotesk text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
