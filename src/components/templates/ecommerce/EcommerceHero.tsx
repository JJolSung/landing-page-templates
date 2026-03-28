import { ShoppingCart, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function EcommerceHero() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text */}
        <ScrollReveal direction="left">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-ecommerce-coral bg-ecommerce-coral/10 rounded-full mb-6">
              New Release
            </span>
            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-ecommerce-dark leading-tight mb-4">
              Experience Sound{" "}
              <span className="text-ecommerce-coral">Like Never Before</span>
            </h1>
            <p className="text-lg text-ecommerce-muted mb-2 max-w-lg">
              AuraSound Pro
            </p>
            <p className="text-ecommerce-muted mb-6 max-w-lg leading-relaxed">
              Premium wireless headphones engineered for audiophiles. Immersive
              spatial audio, industry-leading noise cancellation, and 40 hours
              of uninterrupted listening.
            </p>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-sora text-4xl font-bold text-ecommerce-dark">
                $299
              </span>
              <span className="text-ecommerce-muted line-through text-lg">
                $399
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-ecommerce-coral bg-ecommerce-coral/10 px-2 py-0.5 rounded">
                Save $100
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                className="px-8 py-3.5 bg-ecommerce-coral text-white rounded-full text-sm font-semibold hover:bg-ecommerce-coral-dark transition-colors flex items-center justify-center gap-2 shadow-lg shadow-ecommerce-coral/25"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </a>
              <a
                href="#features"
                className="px-8 py-3.5 border-2 border-ecommerce-dark text-ecommerce-dark rounded-full text-sm font-semibold hover:bg-ecommerce-dark hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: CSS Product Illustration */}
        <ScrollReveal direction="right">
          <div className="relative flex items-center justify-center">
            {/* Ambient glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-ecommerce-coral/10 rounded-full blur-3xl" />

            {/* Product card */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl bg-gradient-to-br from-ecommerce-coral via-ecommerce-coral-light to-rose-300 p-1 shadow-2xl shadow-ecommerce-coral/20">
              <div className="w-full h-full rounded-[22px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center gap-6 p-8">
                {/* Headphone illustration */}
                <div className="relative">
                  {/* Headband */}
                  <div className="w-32 h-16 border-4 border-ecommerce-coral rounded-t-full" />
                  {/* Left ear cup */}
                  <div className="absolute -left-3 top-10 w-12 h-16 bg-gradient-to-b from-ecommerce-coral to-ecommerce-coral-dark rounded-lg shadow-lg shadow-ecommerce-coral/30" />
                  {/* Right ear cup */}
                  <div className="absolute -right-3 top-10 w-12 h-16 bg-gradient-to-b from-ecommerce-coral to-ecommerce-coral-dark rounded-lg shadow-lg shadow-ecommerce-coral/30" />
                  {/* Left cushion */}
                  <div className="absolute -left-1 top-12 w-8 h-12 bg-gray-700 rounded-md ml-1" />
                  {/* Right cushion */}
                  <div className="absolute -right-1 top-12 w-8 h-12 bg-gray-700 rounded-md mr-1" />
                </div>
                {/* Product name */}
                <div className="text-center mt-8">
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                    Premium Series
                  </p>
                  <p className="text-white font-sora font-bold text-lg">
                    AuraSound Pro
                  </p>
                </div>
                {/* Specs badges */}
                <div className="flex gap-2">
                  <span className="px-2 py-1 text-[10px] text-ecommerce-coral border border-ecommerce-coral/30 rounded-full">
                    ANC
                  </span>
                  <span className="px-2 py-1 text-[10px] text-ecommerce-coral border border-ecommerce-coral/30 rounded-full">
                    40hr
                  </span>
                  <span className="px-2 py-1 text-[10px] text-ecommerce-coral border border-ecommerce-coral/30 rounded-full">
                    Spatial
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
