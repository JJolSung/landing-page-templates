import ScrollReveal from "@/components/shared/ScrollReveal";
import { ArrowRight, Play } from "lucide-react";

export default function SaasHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-accent/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-saas-border text-sm text-zinc-400 mb-8">
            <span className="w-2 h-2 bg-saas-accent rounded-full animate-pulse" />
            Now in public beta
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Ship products
            <br />
            <span className="text-saas-accent">10x faster</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            The all-in-one platform for modern teams to plan, build, and ship
            world-class products together.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="px-8 py-3.5 bg-saas-accent text-white rounded-lg font-medium text-sm hover:bg-saas-accent-light transition-colors flex items-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#product"
              className="px-8 py-3.5 bg-saas-surface text-zinc-300 rounded-lg font-medium text-sm border border-saas-border hover:border-zinc-600 transition-colors flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Dashboard mockup */}
      <ScrollReveal delay={0.4} className="relative z-10 w-full max-w-4xl mx-auto mt-16 px-4">
        <div className="rounded-xl border border-saas-border bg-saas-surface p-1 shadow-2xl shadow-saas-accent/5">
          <div className="rounded-lg bg-saas-bg p-4">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="h-5 w-48 bg-saas-surface rounded flex items-center justify-center">
                <span className="text-[9px] text-zinc-600">app.flowboard.io/dashboard</span>
              </div>
              <div className="w-16" />
            </div>
            {/* Content */}
            <div className="grid grid-cols-12 gap-3">
              {/* Sidebar */}
              <div className="col-span-3 space-y-1.5">
                {[
                  { label: "Overview", active: false },
                  { label: "Projects", active: true },
                  { label: "Analytics", active: false },
                  { label: "Team", active: false },
                  { label: "Settings", active: false },
                  { label: "Billing", active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`h-6 rounded px-2 flex items-center ${
                      item.active ? "bg-saas-accent/20" : "bg-saas-surface"
                    }`}
                  >
                    <span className={`text-[9px] ${item.active ? "text-saas-accent" : "text-zinc-600"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              {/* Main */}
              <div className="col-span-9 space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Active Users", value: "2,847", trend: "+12%" },
                    { label: "Revenue", value: "$48.2k", trend: "+8.3%" },
                    { label: "Conversion", value: "3.24%", trend: "+2.1%" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="h-20 bg-saas-surface rounded-lg p-3"
                    >
                      <p className="text-[9px] text-zinc-600 mb-1.5">{stat.label}</p>
                      <p className="text-sm font-semibold text-white font-mono">{stat.value}</p>
                      <p className="text-[9px] text-emerald-400 mt-0.5">{stat.trend}</p>
                    </div>
                  ))}
                </div>
                <div className="h-32 bg-saas-surface rounded-lg p-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] text-zinc-600">Monthly Revenue</span>
                    <span className="text-[8px] text-zinc-700 bg-saas-bg px-1.5 py-0.5 rounded">Last 12 months</span>
                  </div>
                  <div className="flex gap-1.5 h-20">
                    {[40, 60, 35, 80, 55, 70, 45, 65, 50, 75, 60, 85].map(
                      (h, i) => (
                        <div key={i} className="flex-1 flex items-end">
                          <div
                            className="w-full bg-gradient-to-t from-saas-accent/40 to-saas-accent/10 rounded-t"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
