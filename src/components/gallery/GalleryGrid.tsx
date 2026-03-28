"use client";

import { useState } from "react";
import { templates } from "@/data/templates";
import GalleryFilter from "./GalleryFilter";
import TemplateCard from "./TemplateCard";

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? templates
      : templates.filter((t) => t.category === activeFilter);

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-24">
      <GalleryFilter onFilterChange={setActiveFilter} activeFilter={activeFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {filtered.map((template, i) => (
          <TemplateCard key={template.slug} template={template} index={i} />
        ))}
      </div>
    </section>
  );
}
