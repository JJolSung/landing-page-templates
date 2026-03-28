import ScrollReveal from "@/components/shared/ScrollReveal";

export default function GalleryHero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
      <ScrollReveal>
        <p className="text-sm uppercase tracking-[0.2em] text-gallery-muted mb-6">
          Portfolio Showcase
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h1 className="font-instrument-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gallery-text leading-[1.05] mb-6">
          Landing Pages
          <br />
          That Convert
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="text-lg sm:text-xl text-gallery-muted max-w-xl mx-auto">
          Professionally crafted, delivered in 48 hours.
          <br className="hidden sm:block" />
          Each template is production-ready and fully responsive.
        </p>
      </ScrollReveal>
    </section>
  );
}
