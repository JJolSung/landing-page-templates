"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Info, X } from "lucide-react";
import Link from "next/link";

interface BackToGalleryProps {
  templateName: string;
  onToggleInfo: () => void;
  isInfoOpen: boolean;
  theme?: "dark" | "light";
}

export default function BackToGallery({
  templateName,
  onToggleInfo,
  isInfoOpen,
  theme = "dark",
}: BackToGalleryProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";
  const bgClass = scrolled
    ? isDark
      ? "bg-black/80 backdrop-blur-md border-b border-white/10"
      : "bg-white/80 backdrop-blur-md border-b border-black/10"
    : "bg-transparent";
  const textClass = isDark ? "text-white" : "text-gray-900";
  const mutedClass = isDark
    ? "text-white/60 hover:text-white"
    : "text-gray-600 hover:text-gray-900";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className={`flex items-center gap-2 text-sm ${mutedClass} transition-colors -ml-2 px-2 py-2`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Gallery</span>
        </Link>

        <span className={`text-sm font-medium ${textClass} hidden sm:block`}>
          {templateName}
        </span>

        <button
          onClick={onToggleInfo}
          className={`flex items-center gap-1.5 text-sm ${mutedClass} transition-colors -mr-2 px-2 py-2`}
          aria-label={isInfoOpen ? "Close template info" : "Open template info"}
        >
          {isInfoOpen ? (
            <X className="w-4 h-4" />
          ) : (
            <Info className="w-4 h-4" />
          )}
          <span className="hidden sm:inline">Template Info</span>
        </button>
      </div>
    </nav>
  );
}
