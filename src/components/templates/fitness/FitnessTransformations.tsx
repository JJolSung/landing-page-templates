import ScrollReveal from "@/components/shared/ScrollReveal";
import { Quote } from "lucide-react";

const transformations = [
  {
    name: "David Park",
    stat: "Lost 20kg in 6 months",
    quote:
      "I walked in overweight and out of shape. Six months later I ran my first half marathon. The trainers here pushed me past every limit I thought I had.",
    program: "HIIT + Strength",
  },
  {
    name: "Mia Chen",
    stat: "Gained 8kg lean muscle",
    quote:
      "As a woman, I was intimidated by the weight room. The coaching staff made me feel welcome from day one. Now I deadlift twice my bodyweight and feel unstoppable.",
    program: "Weight Training",
  },
  {
    name: "James Wilson",
    stat: "First amateur fight in 4 months",
    quote:
      "I came in with zero boxing experience. The discipline and training methodology here is military-grade. Four months later I stepped into the ring and won.",
    program: "Boxing",
  },
];

export default function FitnessTransformations() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-fitness-surface">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-oswald text-sm uppercase tracking-[0.3em] text-fitness-neon mb-3">
              Real Results
            </p>
            <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white">
              Transformations
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.15}>
              <div className="bg-fitness-bg border border-fitness-border p-6 lg:p-8 h-full flex flex-col relative">
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-fitness-neon/30" />

                <Quote className="w-8 h-8 text-fitness-neon/30 mb-4" />

                <p className="text-zinc-300 text-sm leading-relaxed mb-6 flex-1 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div>
                  <p className="font-oswald text-lg font-bold text-fitness-neon uppercase mb-1">
                    {item.stat}
                  </p>
                  <p className="font-oswald text-base font-bold uppercase text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">
                    {item.program}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
