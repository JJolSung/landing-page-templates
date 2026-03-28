"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const faqs = [
  {
    q: "How long does shipping take?",
    a: "We offer free standard shipping (5-7 business days) on all orders. Express shipping (2-3 business days) is available for $9.99. All orders include tracking and insurance.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day hassle-free return policy. If you're not completely satisfied with your AuraSound Pro, return them in original packaging for a full refund. We even cover return shipping.",
  },
  {
    q: "Are the headphones compatible with all devices?",
    a: "Yes! AuraSound Pro connects via Bluetooth 5.3 and is compatible with iOS, Android, macOS, Windows, and any Bluetooth-enabled device. We also include a 3.5mm audio cable for wired listening.",
  },
  {
    q: "What does the warranty cover?",
    a: "Our 2-year warranty covers all manufacturing defects including driver failure, connectivity issues, and build quality problems. Accidental damage protection can be added for $29 at checkout.",
  },
  {
    q: "Can I use them for phone calls?",
    a: "Absolutely. AuraSound Pro features 4 beam-forming microphones with AI-powered voice isolation, ensuring crystal-clear calls even in noisy environments. They work seamlessly with Zoom, Teams, and FaceTime.",
  },
];

export default function EcommerceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-ecommerce-surface">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-ecommerce-coral text-sm font-medium uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-ecommerce-dark">
              Frequently asked questions
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="border border-ecommerce-border rounded-xl overflow-hidden bg-ecommerce-bg">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-ecommerce-coral/5 transition-colors"
                >
                  <span className="text-ecommerce-dark text-sm font-medium pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-ecommerce-coral flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="px-5 pb-5 text-sm text-ecommerce-muted leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
