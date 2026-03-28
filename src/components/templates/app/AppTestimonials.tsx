import ScrollReveal from "@/components/shared/ScrollReveal";

const testimonials = [
  {
    quote:
      "Finflow completely changed how I manage money. I've saved more in 3 months than the entire last year. The AI insights are genuinely useful.",
    name: "Jessica Park",
    initials: "JP",
    duration: "using for 6 months",
  },
  {
    quote:
      "As a freelancer, tracking income and expenses was a nightmare. Finflow makes it effortless — I actually enjoy checking my finances now.",
    name: "Daniel Okafor",
    initials: "DO",
    duration: "using for 4 months",
  },
  {
    quote:
      "The investment tracking feature is incredible. I can see all my portfolios in one place and the goal tracking keeps me motivated.",
    name: "Sophie Chen",
    initials: "SC",
    duration: "using for 8 months",
  },
];

export default function AppTestimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-app-indigo to-app-purple bg-clip-text text-transparent mb-3">
            Testimonials
          </p>
          <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-white mb-4">
            Loved by users worldwide
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Join hundreds of thousands of people who trust Finflow with their
            finances.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <div className="relative rounded-2xl bg-app-surface/50 p-6 h-full flex flex-col border border-app-border">
              {/* Gradient left border accent */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-app-indigo to-app-purple" />

              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1 pl-3">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pl-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-app-indigo to-app-purple flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.duration}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
