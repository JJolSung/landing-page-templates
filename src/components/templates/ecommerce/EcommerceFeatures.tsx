import ScrollReveal from "@/components/shared/ScrollReveal";

const features = [
  {
    title: "Active Noise Cancellation",
    subtitle: "Silence the world",
    description:
      "Our proprietary AuraBlock technology uses 6 microphones and advanced AI processing to eliminate up to 98% of ambient noise. Focus on your music, not your surroundings.",
    gradient: "from-rose-500 via-ecommerce-coral to-orange-400",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Sound wave rings being cancelled */}
        <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white" />
          </div>
        </div>
        {/* Cancel line */}
        <div className="absolute w-20 h-0.5 bg-white/80 rotate-45" />
      </div>
    ),
  },
  {
    title: "40-Hour Battery Life",
    subtitle: "Power that keeps up",
    description:
      "Go from Monday to Friday on a single charge. Quick Charge technology gives you 5 hours of playback in just 10 minutes. Never miss a beat.",
    gradient: "from-amber-400 via-orange-500 to-ecommerce-coral",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Battery shape */}
        <div className="w-20 h-10 border-2 border-white/80 rounded-lg flex items-center p-1 relative">
          {/* Battery tip */}
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-4 bg-white/80 rounded-r" />
          {/* Charge level */}
          <div className="h-full w-[85%] bg-gradient-to-r from-green-400 to-green-300 rounded" />
        </div>
        {/* Lightning bolt */}
        <div className="absolute -top-2 -right-2 text-white font-bold text-lg">
          &#9889;
        </div>
      </div>
    ),
  },
  {
    title: "Spatial Audio",
    subtitle: "Sound in 3D",
    description:
      "Experience music the way artists intended. Dynamic head tracking and Dolby Atmos support create a theater-like soundstage that moves with you.",
    gradient: "from-purple-500 via-pink-500 to-ecommerce-coral",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* 3D spheres */}
        <div className="w-8 h-8 rounded-full bg-white/30 absolute -top-1 -left-1" />
        <div className="w-12 h-12 rounded-full bg-white/20 absolute top-4 left-6" />
        <div className="w-6 h-6 rounded-full bg-white/50 absolute bottom-2 left-2" />
        {/* Center dot */}
        <div className="w-5 h-5 rounded-full bg-white shadow-lg shadow-white/30 relative z-10" />
        {/* Orbit rings */}
        <div className="absolute w-24 h-12 border border-white/20 rounded-full rotate-12" />
        <div className="absolute w-20 h-10 border border-white/15 rounded-full -rotate-12" />
      </div>
    ),
  },
];

export default function EcommerceFeatures() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-ecommerce-coral text-sm font-medium uppercase tracking-wider mb-3">
              Features
            </p>
            <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-ecommerce-dark">
              Engineered for perfection
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-24">
          {features.map((feature, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={feature.title}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Illustration */}
                <ScrollReveal
                  direction={isReversed ? "right" : "left"}
                  delay={0.1}
                >
                  <div
                    className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div
                      className={`relative w-full aspect-square max-w-sm mx-auto rounded-3xl bg-gradient-to-br ${feature.gradient} p-8 shadow-xl`}
                    >
                      {feature.icon}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Text */}
                <ScrollReveal
                  direction={isReversed ? "left" : "right"}
                  delay={0.2}
                >
                  <div
                    className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <p className="text-ecommerce-coral text-sm font-medium uppercase tracking-wider mb-2">
                      {feature.subtitle}
                    </p>
                    <h3 className="font-sora text-2xl sm:text-3xl font-bold text-ecommerce-dark mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-ecommerce-muted leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
