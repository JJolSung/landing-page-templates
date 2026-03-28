"use client";

import { useState } from "react";
import { templates } from "@/data/templates";
import BackToGallery from "@/components/shared/BackToGallery";
import TemplateInfoDrawer from "@/components/shared/TemplateInfoDrawer";
import SaasHero from "@/components/templates/saas/SaasHero";
import SaasLogoBanner from "@/components/templates/saas/SaasLogoBanner";
import SaasFeatures from "@/components/templates/saas/SaasFeatures";
import SaasProductScreenshots from "@/components/templates/saas/SaasProductScreenshots";
import SaasPricing from "@/components/templates/saas/SaasPricing";
import SaasTestimonials from "@/components/templates/saas/SaasTestimonials";
import SaasFAQ from "@/components/templates/saas/SaasFAQ";
import SaasCTA from "@/components/templates/saas/SaasCTA";
import SaasFooter from "@/components/templates/saas/SaasFooter";

const template = templates.find((t) => t.slug === "saas");

export default function SaasPage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  if (!template) return null;

  return (
    <main className="min-h-screen bg-saas-bg text-white font-dm-sans">
      <BackToGallery
        templateName="SaaS Product"
        onToggleInfo={() => setIsInfoOpen(!isInfoOpen)}
        isInfoOpen={isInfoOpen}
        theme="dark"
      />
      <TemplateInfoDrawer
        template={template}
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
      <SaasHero />
      <SaasLogoBanner />
      <SaasFeatures />
      <SaasProductScreenshots />
      <SaasPricing />
      <SaasTestimonials />
      <SaasFAQ />
      <SaasCTA />
      <SaasFooter />
    </main>
  );
}
