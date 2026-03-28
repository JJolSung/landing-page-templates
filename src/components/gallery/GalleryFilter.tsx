"use client";

import { useState } from "react";
import { Template } from "@/data/templates";

const categories = [
  "All",
  "SaaS",
  "Restaurant",
  "Fitness",
  "Real Estate",
  "Medical",
  "E-commerce",
  "Education",
  "Mobile App",
] as const;

interface GalleryFilterProps {
  onFilterChange: (category: string) => void;
  activeFilter: string;
}

export default function GalleryFilter({
  onFilterChange,
  activeFilter,
}: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 px-4 mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-5 py-2 rounded-full text-sm transition-all duration-200 ${
            activeFilter === category
              ? "bg-gallery-text text-white"
              : "bg-transparent text-gallery-muted border border-gallery-border hover:border-gallery-text hover:text-gallery-text"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
