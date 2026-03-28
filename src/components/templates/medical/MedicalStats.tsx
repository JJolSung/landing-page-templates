"use client";

import CountUp from "@/components/shared/CountUp";

const stats = [
  { end: 50000, suffix: "+", label: "Patients Treated" },
  { end: 15, suffix: "+", label: "Years of Service" },
  { end: 98, suffix: "%", label: "Patient Satisfaction" },
  { end: 25, suffix: "+", label: "Specialists" },
];

export default function MedicalStats() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-medical-surface">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <CountUp
                end={stat.end}
                suffix={stat.suffix}
                className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-medical-teal"
              />
              <p className="text-medical-text/60 text-sm mt-2 font-source-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
