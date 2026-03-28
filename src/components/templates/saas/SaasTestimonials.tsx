import ScrollReveal from "@/components/shared/ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "FlowBoard transformed how our team collaborates. We shipped our product 3x faster than before.",
    name: "Sarah Chen",
    title: "CTO, TechNova",
    avatar: "/images/saas/avatar-sarah.webp",
    rating: 5,
  },
  {
    quote:
      "The analytics alone are worth the subscription. We finally have visibility into our entire pipeline.",
    name: "Marcus Rivera",
    title: "VP Engineering, ScaleUp",
    avatar: "/images/saas/avatar-marcus.webp",
    rating: 5,
  },
  {
    quote:
      "Switching from our old tools was seamless. The team was productive on day one.",
    name: "Emily Watson",
    title: "Product Lead, DataFlow",
    avatar: "/images/saas/avatar-emily.webp",
    rating: 5,
  },
];

function AvatarFallback({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-saas-accent to-saas-accent-light flex items-center justify-center text-white text-sm font-semibold ring-2 ring-saas-accent/20">
      {initials}
    </div>
  );
}

export default function SaasTestimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-saas-accent text-sm font-medium uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-white">
            Loved by teams everywhere
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <div className="p-6 rounded-xl border border-saas-border bg-saas-surface/50 h-full flex flex-col">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-saas-accent text-saas-accent"
                  />
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-saas-accent/20"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <div className="hidden">
                  <AvatarFallback name={t.name} />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-zinc-500 text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
