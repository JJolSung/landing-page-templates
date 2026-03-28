import ScrollReveal from "@/components/shared/ScrollReveal";
import { Dumbbell, Flame, Wind, Swords } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    name: "Weight Training",
    description:
      "Build raw strength with our comprehensive free weight and machine programs. From powerlifting to hypertrophy, our coaches design periodized plans that deliver real results.",
  },
  {
    icon: Flame,
    name: "HIIT",
    description:
      "Torch calories and boost your metabolism with high-intensity interval sessions. 30-minute classes that push your cardio and endurance to the absolute limit.",
  },
  {
    icon: Wind,
    name: "Yoga & Mobility",
    description:
      "Restore balance with power yoga and mobility flows. Improve flexibility, reduce injury risk, and build the functional movement patterns that support heavy training.",
  },
  {
    icon: Swords,
    name: "Boxing",
    description:
      "Unleash your inner fighter with heavy bag work, pad drills, and technique sessions. Build explosive power, coordination, and unbreakable mental toughness.",
  },
];

export default function FitnessPrograms() {
  return (
    <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8 bg-fitness-surface">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-oswald text-sm uppercase tracking-[0.3em] text-fitness-neon mb-3">
              What We Offer
            </p>
            <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white">
              Our Programs
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <ScrollReveal key={program.name} delay={i * 0.1}>
              <div className="group relative bg-fitness-bg border border-fitness-border p-6 lg:p-8 h-full flex flex-col transition-all duration-300 hover:border-fitness-neon/50 hover:shadow-[0_0_30px_rgba(57,255,20,0.1)]">
                {/* Glow line on top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-fitness-border group-hover:bg-fitness-neon transition-colors duration-300" />

                <program.icon className="w-10 h-10 text-fitness-neon mb-5 group-hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.5)] transition-all duration-300" />

                <h3 className="font-oswald text-xl font-bold uppercase text-white mb-3">
                  {program.name}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                  {program.description}
                </p>

                <a
                  href="#"
                  className="mt-6 font-oswald text-sm uppercase tracking-wider text-fitness-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
                >
                  Learn More
                  <span className="text-lg">&rarr;</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
