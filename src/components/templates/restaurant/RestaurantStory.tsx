import ScrollReveal from "@/components/shared/ScrollReveal";

export default function RestaurantStory() {
  return (
    <section id="story" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className="h-px flex-1 max-w-[80px] bg-restaurant-gold/30" />
            <span className="text-restaurant-gold text-sm tracking-[0.3em] uppercase">
              Our Story
            </span>
            <span className="h-px flex-1 max-w-[80px] bg-restaurant-gold/30" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Story text */}
          <ScrollReveal direction="left">
            <div>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-restaurant-green mb-8 leading-tight">
                A Legacy of
                <br />
                <span className="italic text-restaurant-gold">
                  Culinary Excellence
                </span>
              </h2>
              <div className="space-y-6 text-restaurant-green/70 leading-relaxed">
                <p className="italic text-lg border-l-2 border-restaurant-gold pl-6">
                  &ldquo;We believe that every dish tells a story &mdash; of the land
                  it comes from, the hands that nurtured it, and the tradition
                  that inspires it.&rdquo;
                </p>
                <p>
                  Founded in 1987 by Chef Laurent Dubois, our restaurant was
                  born from a simple vision: to create a dining experience that
                  honors the finest ingredients while pushing the boundaries of
                  modern gastronomy.
                </p>
                <p>
                  For over three decades, we have cultivated relationships with
                  local farmers, artisan producers, and fishermen who share our
                  commitment to quality. Every morning, our team handpicks the
                  freshest seasonal produce to compose menus that celebrate
                  nature&apos;s finest offerings.
                </p>
                <p className="font-playfair text-restaurant-green italic text-lg">
                  &mdash; Chef Laurent Dubois
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Chef / interior image with decorative frame */}
          <ScrollReveal direction="right">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto">
              {/* Outer frame */}
              <div className="absolute inset-0 border border-restaurant-gold/30" />
              <div className="absolute inset-3 border border-restaurant-gold/20" />

              {/* Image area */}
              <div className="absolute inset-6 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/restaurant/story-chef.webp"
                  alt="Chef Laurent Dubois in the kitchen"
                  className="w-full h-full object-cover opacity-0 transition-opacity duration-500"
                  onLoad={(e) => {
                    e.currentTarget.classList.remove("opacity-0");
                    e.currentTarget.classList.add("opacity-100");
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = "none";
                  }}
                />
                {/* CSS fallback when image is not available */}
                <div className="absolute inset-0 bg-restaurant-green/5 flex flex-col items-center justify-center p-8">
                  {/* Decorative plate illustration */}
                  <div className="relative w-48 h-48 mb-8">
                    <div className="absolute inset-0 rounded-full border-2 border-restaurant-gold/40" />
                    <div className="absolute inset-4 rounded-full border border-restaurant-gold/30" />
                    <div className="absolute inset-8 rounded-full bg-restaurant-cream border border-restaurant-gold/20" />
                    <div className="absolute inset-12 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-6 h-10 bg-restaurant-green/20 rounded-full rotate-[-15deg] absolute -left-2" />
                        <div className="w-6 h-10 bg-restaurant-green/15 rounded-full rotate-[15deg] absolute left-2" />
                        <div className="w-1 h-12 bg-restaurant-green/20 absolute left-[10px] top-1" />
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-2 mb-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rotate-45 border border-restaurant-gold"
                      />
                    ))}
                  </div>

                  <p className="font-playfair text-restaurant-green text-center text-sm italic">
                    Three Decades of
                    <br />
                    Culinary Mastery
                  </p>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-restaurant-gold" />
              <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-restaurant-gold" />
              <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-restaurant-gold" />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-restaurant-gold" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
