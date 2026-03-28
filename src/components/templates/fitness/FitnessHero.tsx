import ScrollReveal from "@/components/shared/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function FitnessHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Neon glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-fitness-neon/10 rounded-full blur-[150px]" />

      {/* Grid lines background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(57,255,20,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Diagonal bottom cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-fitness-surface"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-oswald text-sm sm:text-base uppercase tracking-[0.3em] text-fitness-neon mb-6">
            No excuses. No limits.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-oswald text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase text-white leading-[0.95] mb-8">
            Transform
            <br />
            Your{" "}
            <span className="text-fitness-neon">Body</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-roboto">
            Elite training programs designed to push your limits and build the
            strongest version of yourself. Join the movement.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="px-10 py-4 bg-fitness-neon text-black font-oswald text-lg uppercase font-bold tracking-wider hover:bg-fitness-neon-dim transition-colors flex items-center gap-3"
            >
              Join Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#programs"
              className="px-10 py-4 border-2 border-white/20 text-white font-oswald text-lg uppercase font-bold tracking-wider hover:border-fitness-neon hover:text-fitness-neon transition-colors"
            >
              View Programs
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
