"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Template } from "@/data/templates";

interface TemplateCardProps {
  template: Template;
  index: number;
}

function SaasPreview() {
  return (
    <div className="w-full h-full bg-[#09090b] p-4 font-sans">
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2 h-2 rounded-full bg-red-500/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
        <div className="w-2 h-2 rounded-full bg-green-500/60" />
      </div>
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#8b5cf6]/20 rounded-full blur-3xl" />
      <div className="relative text-center mt-6">
        <div className="h-2.5 w-28 bg-white/90 rounded mx-auto mb-2" />
        <div className="h-1.5 w-20 bg-white/30 rounded mx-auto mb-4" />
        <div className="flex justify-center gap-2">
          <div className="h-4 w-14 bg-[#8b5cf6] rounded text-[5px] text-white flex items-center justify-center">
            Get Started
          </div>
          <div className="h-4 w-14 bg-white/10 rounded border border-white/20" />
        </div>
      </div>
      <div className="mt-5 mx-2 p-2 bg-white/5 border border-white/10 rounded">
        <div className="grid grid-cols-3 gap-1">
          <div className="h-4 bg-[#8b5cf6]/20 rounded" />
          <div className="h-4 bg-[#8b5cf6]/10 rounded col-span-2" />
          <div className="h-3 bg-white/5 rounded col-span-2" />
          <div className="h-3 bg-white/5 rounded" />
        </div>
      </div>
    </div>
  );
}

function RestaurantPreview() {
  return (
    <div className="w-full h-full bg-[#fef7ed] p-4">
      <div className="border border-[#c8a55a]/40 p-3 h-full flex flex-col items-center justify-center">
        <div className="w-8 h-[1px] bg-[#c8a55a] mb-3" />
        <div className="h-2 w-20 bg-[#1a3a2a]/80 rounded mb-1.5" />
        <div className="h-1 w-16 bg-[#1a3a2a]/30 rounded mb-3 italic" />
        <div className="h-3.5 w-16 bg-[#1a3a2a] rounded text-[5px] text-[#fef7ed] flex items-center justify-center">
          Reserve
        </div>
        <div className="w-8 h-[1px] bg-[#c8a55a] mt-3" />
        <div className="flex gap-3 mt-4">
          <div className="text-center">
            <div className="w-6 h-6 bg-[#1a3a2a]/10 rounded-full flex items-center justify-center text-[6px]">
              🍷
            </div>
          </div>
          <div className="text-center">
            <div className="w-6 h-6 bg-[#1a3a2a]/10 rounded-full flex items-center justify-center text-[6px]">
              🥘
            </div>
          </div>
          <div className="text-center">
            <div className="w-6 h-6 bg-[#1a3a2a]/10 rounded-full flex items-center justify-center text-[6px]">
              🍰
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FitnessPreview() {
  return (
    <div className="w-full h-full bg-black p-4">
      <div className="relative">
        <div className="absolute top-0 right-2 w-16 h-16 bg-[#39ff14]/10 rounded-full blur-2xl" />
        <div className="text-center mt-4">
          <div className="h-3 w-24 bg-white/90 rounded mx-auto mb-1" />
          <div className="h-2.5 w-16 bg-[#39ff14] rounded mx-auto mb-1" />
          <div className="h-1 w-20 bg-white/20 rounded mx-auto mb-3" />
          <div className="h-4 w-16 bg-[#39ff14] rounded mx-auto text-[5px] text-black font-bold flex items-center justify-center">
            JOIN NOW
          </div>
        </div>
        <div className="flex justify-between mt-4 px-1">
          {["500+", "15", "24/7", "50+"].map((stat) => (
            <div key={stat} className="text-center">
              <div className="text-[6px] text-[#39ff14] font-bold">{stat}</div>
              <div className="w-5 h-[2px] bg-white/10 rounded mt-0.5" />
            </div>
          ))}
        </div>
        <div
          className="mt-3 h-6 w-full"
          style={{
            background:
              "linear-gradient(135deg, #39ff14 0%, transparent 50%)",
            opacity: 0.05,
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
        />
      </div>
    </div>
  );
}

function RealEstatePreview() {
  return (
    <div className="w-full h-full bg-white p-4">
      <div className="text-center mt-3">
        <div className="h-2 w-24 bg-[#2d2d2d]/80 rounded mx-auto mb-1" />
        <div className="h-1 w-16 bg-[#2d2d2d]/20 rounded mx-auto mb-3" />
        <div className="mx-auto w-full max-w-[90%] flex gap-1 mb-4">
          <div className="flex-1 h-4 bg-[#f5f5f5] rounded border border-gray-200" />
          <div className="h-4 w-8 bg-[#c9a96e] rounded text-[4px] text-white flex items-center justify-center">
            Search
          </div>
        </div>
      </div>
      <div className="flex gap-1.5 overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex-shrink-0 w-16 rounded overflow-hidden border border-gray-100"
          >
            <div
              className="h-10 w-full"
              style={{
                background: `linear-gradient(135deg, ${
                  i === 1
                    ? "#c9a96e33, #c9a96e11"
                    : i === 2
                    ? "#2d2d2d11, #2d2d2d22"
                    : "#c9a96e11, #ffffff"
                })`,
              }}
            />
            <div className="p-1">
              <div className="h-1 w-8 bg-[#2d2d2d]/60 rounded mb-0.5" />
              <div className="h-1 w-6 bg-[#c9a96e]/60 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MedicalPreview() {
  return (
    <div className="w-full h-full bg-[#f0fdfa] p-4">
      <div className="text-center mt-2 mb-4">
        <div className="h-2.5 w-24 bg-[#0d9488]/80 rounded mx-auto mb-1.5" />
        <div className="h-1.5 w-20 bg-[#134e4a]/20 rounded mx-auto mb-3" />
        <div className="h-4 w-20 bg-[#0d9488] rounded-full mx-auto text-[5px] text-white flex items-center justify-center">
          Book Now
        </div>
      </div>
      <div className="flex gap-1.5 justify-center mb-3">
        {["🏥", "🩺", "💊"].map((icon) => (
          <div key={icon} className="w-12 h-10 bg-white rounded-lg border border-[#ccfbf1] flex items-center justify-center text-xs shadow-sm">
            {icon}
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        {[1, 2].map((i) => (
          <div key={i} className="flex-1 bg-white rounded-lg p-2 border border-[#ccfbf1]">
            <div className="w-5 h-5 bg-[#0d9488]/10 rounded-full mb-1 mx-auto" />
            <div className="h-1 w-8 bg-[#134e4a]/40 rounded mx-auto mb-0.5" />
            <div className="h-1 w-6 bg-[#0d9488]/30 rounded mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

function EcommercePreview() {
  return (
    <div className="w-full h-full bg-[#fffbf5] p-4">
      <div className="flex gap-3">
        <div className="w-20 h-24 bg-gradient-to-br from-[#f43f5e]/20 to-[#fb7185]/10 rounded-lg flex items-center justify-center text-2xl">
          👜
        </div>
        <div className="flex-1 pt-1">
          <div className="h-2 w-16 bg-[#1a1a1a]/70 rounded mb-1.5" />
          <div className="h-1.5 w-12 bg-[#f43f5e] rounded mb-2" />
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 text-[6px] text-[#f59e0b]">★</div>
            ))}
          </div>
          <div className="h-3.5 w-14 bg-[#f43f5e] rounded text-[5px] text-white flex items-center justify-center">
            Add to Cart
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {["✨", "🚚", "↩️"].map((icon) => (
          <div key={icon} className="bg-white rounded p-1.5 text-center border border-[#fecdd3]/50">
            <div className="text-xs mb-0.5">{icon}</div>
            <div className="h-1 w-6 bg-[#1a1a1a]/20 rounded mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

function CoursePreview() {
  return (
    <div className="w-full h-full bg-[#fefce8] p-4">
      <div className="text-center mt-2 mb-3">
        <div className="h-2.5 w-20 bg-[#312e81]/80 rounded mx-auto mb-1.5" />
        <div className="h-1.5 w-24 bg-[#312e81]/20 rounded mx-auto mb-3" />
        <div className="inline-flex gap-1.5">
          <div className="h-4 w-16 bg-[#f59e0b] rounded text-[5px] text-white flex items-center justify-center font-bold">
            Enroll Now
          </div>
          <div className="h-4 w-14 bg-transparent border border-[#312e81]/30 rounded text-[5px] text-[#312e81] flex items-center justify-center">
            Preview
          </div>
        </div>
      </div>
      <div className="space-y-1.5">
        {["Module 1", "Module 2", "Module 3"].map((mod, i) => (
          <div key={mod} className="flex items-center gap-2 bg-white rounded p-1.5 border border-[#e0e7ff]">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[5px] font-bold ${
              i === 0 ? "bg-[#f59e0b] text-white" : "bg-[#312e81]/10 text-[#312e81]"
            }`}>
              {i + 1}
            </div>
            <div className="h-1 flex-1 bg-[#312e81]/15 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

function AppPreview() {
  return (
    <div className="w-full h-full bg-[#0f172a] p-4 relative overflow-hidden">
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#6366f1]/30 to-[#a855f7]/30 rounded-full blur-xl" />
      <div className="text-center mt-3 relative">
        <div className="h-2.5 w-20 bg-white/80 rounded mx-auto mb-1.5" />
        <div className="h-1.5 w-24 bg-white/20 rounded mx-auto mb-3" />
        <div className="flex justify-center gap-1.5 mb-3">
          <div className="h-4 w-16 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded text-[5px] text-white flex items-center justify-center">
            App Store
          </div>
          <div className="h-4 w-16 bg-white/10 border border-white/20 rounded text-[5px] text-white flex items-center justify-center">
            Google Play
          </div>
        </div>
      </div>
      <div className="mx-auto w-16 h-28 bg-[#1e293b] rounded-lg border border-[#334155] p-1">
        <div className="w-full h-full rounded bg-gradient-to-b from-[#6366f1]/20 to-[#a855f7]/10 flex flex-col items-center justify-center gap-1">
          <div className="w-6 h-6 bg-gradient-to-br from-[#6366f1] to-[#a855f7] rounded-lg" />
          <div className="h-1 w-8 bg-white/30 rounded" />
          <div className="h-1 w-6 bg-white/15 rounded" />
        </div>
      </div>
    </div>
  );
}

const previews: Record<string, () => React.JSX.Element> = {
  saas: SaasPreview,
  restaurant: RestaurantPreview,
  fitness: FitnessPreview,
  realestate: RealEstatePreview,
  medical: MedicalPreview,
  ecommerce: EcommercePreview,
  course: CoursePreview,
  app: AppPreview,
};

export default function TemplateCard({ template, index }: TemplateCardProps) {
  const Preview = previews[template.slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/templates/${template.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-xl border border-gallery-border bg-white transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/5 group-hover:-translate-y-1">
          {/* CSS Mini Preview */}
          <div className="relative h-56 sm:h-64 overflow-hidden">
            {Preview && <Preview />}
          </div>

          {/* Card Info */}
          <div className="p-5 border-t border-gallery-border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gallery-text group-hover:text-black transition-colors">
                {template.name}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-gallery-muted group-hover:text-gallery-text transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-1 bg-gallery-bg rounded-full text-gallery-muted">
                {template.category}
              </span>
              <span className="text-xs text-gallery-muted">
                {template.sectionCount} sections
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
