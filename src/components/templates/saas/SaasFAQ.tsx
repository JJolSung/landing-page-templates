"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const faqs = [
  {
    q: "How does the free trial work?",
    a: "Start with our Free plan at no cost. When you're ready to upgrade, the Pro plan comes with a 14-day free trial. No credit card required.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use AES-256 encryption at rest and TLS 1.3 in transit. We're SOC 2 Type II certified and undergo regular security audits.",
  },
  {
    q: "Do you offer custom integrations?",
    a: "Pro and Enterprise plans include API access for custom integrations. We also have pre-built connectors for Slack, GitHub, Jira, and 50+ other tools.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Free plan includes email support. Pro includes priority email and chat. Enterprise gets a dedicated success manager and phone support.",
  },
];

export default function SaasFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-saas-accent text-base font-medium uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-white">
            Frequently asked questions
          </h2>
        </div>
      </ScrollReveal>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="border border-saas-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-saas-surface/50 transition-colors"
              >
                <span className="text-white text-base font-medium pr-4">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 text-zinc-500 flex-shrink-0" />
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
                    <p className="px-5 pb-5 text-base text-zinc-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
