"use client";

import { useState } from "react";
import { templates } from "@/data/templates";
import BackToGallery from "@/components/shared/BackToGallery";
import TemplateInfoDrawer from "@/components/shared/TemplateInfoDrawer";
import AppHero from "@/components/templates/app/AppHero";
import AppFeatures from "@/components/templates/app/AppFeatures";
import AppShowcase from "@/components/templates/app/AppShowcase";
import AppStats from "@/components/templates/app/AppStats";
import AppTestimonials from "@/components/templates/app/AppTestimonials";
import AppPricing from "@/components/templates/app/AppPricing";
import AppWaitlist from "@/components/templates/app/AppWaitlist";
import AppFooter from "@/components/templates/app/AppFooter";

const template = templates.find((t) => t.slug === "app");

export default function AppPage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  if (!template) return null;

  return (
    <main className="min-h-screen bg-app-bg text-white font-inter">
      <BackToGallery
        templateName="Mobile App"
        onToggleInfo={() => setIsInfoOpen(!isInfoOpen)}
        isInfoOpen={isInfoOpen}
        theme="dark"
      />
      <TemplateInfoDrawer
        template={template}
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
      <AppHero />
      <AppFeatures />
      <AppShowcase />
      <AppStats />
      <AppTestimonials />
      <AppPricing />
      <AppWaitlist />
      <AppFooter />
    </main>
  );
}
