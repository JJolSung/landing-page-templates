"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";
import { Template } from "@/data/templates";

interface TemplateInfoDrawerProps {
  template: Template;
  isOpen: boolean;
  onClose: () => void;
}

export default function TemplateInfoDrawer({
  template,
  isOpen,
  onClose,
}: TemplateInfoDrawerProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-[360px] max-w-[90vw] bg-white z-[70] shadow-2xl overflow-y-auto"
            role="dialog"
            aria-label="Template information"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-semibold text-gray-900">
                  Template Info
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-1 block">
                    Template Name
                  </label>
                  <p className="text-gray-900 font-medium">{template.name}</p>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-1 block">
                    Design Style
                  </label>
                  <p className="text-gray-900">{template.designStyle}</p>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-1 block">
                    Description
                  </label>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {template.description}
                  </p>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-1 block">
                    Color Palette
                  </label>
                  <div className="flex gap-2 mt-2">
                    {Object.entries(template.colors).map(([key, color]) => (
                      <div key={key} className="text-center">
                        <div
                          className="w-10 h-10 rounded-lg border border-gray-200"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-[10px] text-gray-400 mt-1 block">
                          {key}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-1 block">
                    Typography
                  </label>
                  <p className="text-gray-900 text-sm">
                    {template.fonts.heading} / {template.fonts.body}
                  </p>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-1 block">
                    Tech Stack
                  </label>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-1 block">
                    Delivery Time
                  </label>
                  <p className="text-gray-900 font-medium">48 hours</p>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-1 block">
                    Features
                  </label>
                  <ul className="space-y-1.5 mt-1">
                    {template.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-gray-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-1 block">
                    Sections
                  </label>
                  <p className="text-gray-900">
                    {template.sectionCount} sections included
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100">
                <a
                  href="https://www.movatech.org/en/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  Get This Template
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-xs text-gray-400 text-center mt-3">
                  Custom modifications available upon request
                </p>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
