"use client";

import ScrollReveal from "@/components/shared/ScrollReveal";
import CountUp from "@/components/shared/CountUp";

const stats = [
  { value: 500, suffix: "K+", label: "Downloads" },
  { value: 4.9, suffix: "", label: "App Store Rating", isDecimal: true },
  { value: 150, suffix: "+", label: "Countries" },
  { value: 99.9, suffix: "%", label: "Uptime", isDecimal: true },
];

export default function AppStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="rounded-2xl border border-app-border bg-app-surface/50 p-8 sm:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <div className="font-manrope text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2">
                    <span className="bg-gradient-to-r from-app-indigo to-app-purple bg-clip-text text-transparent">
                      {stat.isDecimal ? (
                        <>
                          <CountUp
                            end={Math.floor(stat.value)}
                            className="bg-gradient-to-r from-app-indigo to-app-purple bg-clip-text text-transparent"
                          />
                          .
                          <CountUp
                            end={
                              stat.value === 4.9
                                ? 9
                                : 9
                            }
                            className="bg-gradient-to-r from-app-indigo to-app-purple bg-clip-text text-transparent"
                          />
                          {stat.suffix}
                        </>
                      ) : (
                        <CountUp
                          end={stat.value}
                          suffix={stat.suffix}
                          className="bg-gradient-to-r from-app-indigo to-app-purple bg-clip-text text-transparent"
                        />
                      )}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
