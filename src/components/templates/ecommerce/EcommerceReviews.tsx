"use client";

import { Star, BadgeCheck } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const reviews = [
  {
    name: "Sarah M.",
    stars: 5,
    date: "Feb 12, 2026",
    text: "These headphones are a game-changer. The noise cancellation is on another level\u2014I can\u2019t hear anything in my open office. The sound quality is rich and detailed. Worth every penny.",
    verified: true,
  },
  {
    name: "James K.",
    stars: 5,
    date: "Jan 28, 2026",
    text: "I\u2019ve owned Sony, Bose, and Apple headphones. The AuraSound Pro beats them all. 40 hours of battery is not marketing fluff\u2014I charged them on Monday and they lasted until Friday.",
    verified: true,
  },
  {
    name: "Emily R.",
    stars: 4,
    date: "Mar 5, 2026",
    text: "Beautiful design and incredible sound. Spatial Audio with movies is an immersive experience. Took one star off because I wish the ear cups were slightly larger, but otherwise perfect.",
    verified: true,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function EcommerceReviews() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ecommerce-surface">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-ecommerce-coral text-sm font-medium uppercase tracking-wider mb-3">
              Reviews
            </p>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-ecommerce-dark mb-6">
              Loved by thousands
            </h2>

            {/* Overall rating */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-baseline gap-2">
                <span className="font-sora text-5xl font-bold text-ecommerce-dark">
                  4.9
                </span>
                <span className="text-ecommerce-muted text-sm">/ 5</span>
              </div>
              <StarRating count={5} />
              <p className="text-ecommerce-muted text-sm">
                Based on 2,847 reviews
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 0.1}>
              <div className="bg-ecommerce-bg border border-ecommerce-border rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <StarRating count={review.stars} />
                  <span className="text-xs text-ecommerce-muted">
                    {review.date}
                  </span>
                </div>
                <p className="text-ecommerce-dark text-sm leading-relaxed flex-1 mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-ecommerce-border">
                  <span className="font-semibold text-sm text-ecommerce-dark">
                    {review.name}
                  </span>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-xs text-ecommerce-coral">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      Verified Purchase
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
