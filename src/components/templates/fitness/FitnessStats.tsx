"use client";

import CountUp from "@/components/shared/CountUp";

const stats = [
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 15, suffix: "", label: "Expert Trainers" },
  { value: 24, suffix: "/7", label: "Gym Access" },
  { value: 50, suffix: "+", label: "Weekly Classes" },
];

export default function FitnessStats() {
  return (
    <section className="relative bg-fitness-surface py-16 px-4 sm:px-6 lg:px-8">
      {/* Top diagonal cut */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-fitness-bg"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-oswald text-4xl sm:text-5xl md:text-6xl font-bold text-fitness-neon mb-2">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </div>
              <p className="font-oswald text-sm sm:text-base uppercase tracking-wider text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
