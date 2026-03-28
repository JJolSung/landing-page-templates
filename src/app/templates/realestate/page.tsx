"use client";

import { useState } from "react";
import { templates } from "@/data/templates";
import BackToGallery from "@/components/shared/BackToGallery";
import TemplateInfoDrawer from "@/components/shared/TemplateInfoDrawer";
import RealEstateHero from "@/components/templates/realestate/RealEstateHero";
import RealEstateListings from "@/components/templates/realestate/RealEstateListings";
import RealEstateServices from "@/components/templates/realestate/RealEstateServices";
import RealEstateStats from "@/components/templates/realestate/RealEstateStats";
import RealEstateAgents from "@/components/templates/realestate/RealEstateAgents";
import RealEstateTestimonials from "@/components/templates/realestate/RealEstateTestimonials";
import RealEstateContact from "@/components/templates/realestate/RealEstateContact";
import RealEstateFooter from "@/components/templates/realestate/RealEstateFooter";

const template = templates.find((t) => t.slug === "realestate");

export default function RealEstatePage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  if (!template) return null;

  return (
    <main className="min-h-screen bg-realestate-bg text-realestate-charcoal font-outfit">
      <BackToGallery
        templateName="Real Estate"
        onToggleInfo={() => setIsInfoOpen(!isInfoOpen)}
        isInfoOpen={isInfoOpen}
        theme="light"
      />
      <TemplateInfoDrawer
        template={template}
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
      <RealEstateHero />
      <RealEstateListings />
      <RealEstateServices />
      <RealEstateStats />
      <RealEstateAgents />
      <RealEstateTestimonials />
      <RealEstateContact />
      <RealEstateFooter />
    </main>
  );
}
