import ScrollReveal from "@/components/shared/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

export default function GalleryCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-instrument-serif text-4xl sm:text-5xl text-gallery-text mb-6">
          Need a custom landing page?
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-gallery-muted text-lg mb-8 max-w-lg mx-auto">
          Get a production-ready landing page tailored to your brand, delivered
          in 48 hours.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <a
          href="https://www.movatech.org/en/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gallery-text text-white rounded-full text-sm font-medium hover:bg-black transition-colors"
        >
          Let&apos;s Talk
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </ScrollReveal>
    </section>
  );
}
