"use client";

import { useState } from "react";
import { templates } from "@/data/templates";
import BackToGallery from "@/components/shared/BackToGallery";
import TemplateInfoDrawer from "@/components/shared/TemplateInfoDrawer";
import EcommerceHero from "@/components/templates/ecommerce/EcommerceHero";
import EcommerceTrustBar from "@/components/templates/ecommerce/EcommerceTrustBar";
import EcommerceFeatures from "@/components/templates/ecommerce/EcommerceFeatures";
import EcommerceReviews from "@/components/templates/ecommerce/EcommerceReviews";
import EcommerceComparison from "@/components/templates/ecommerce/EcommerceComparison";
import EcommerceFAQ from "@/components/templates/ecommerce/EcommerceFAQ";
import EcommerceCTA from "@/components/templates/ecommerce/EcommerceCTA";
import EcommerceFooter from "@/components/templates/ecommerce/EcommerceFooter";

const template = templates.find((t) => t.slug === "ecommerce");

export default function EcommercePage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  if (!template) return null;

  return (
    <main className="min-h-screen bg-ecommerce-bg text-ecommerce-dark font-libre-franklin">
      <BackToGallery
        templateName="E-commerce Product"
        onToggleInfo={() => setIsInfoOpen(!isInfoOpen)}
        isInfoOpen={isInfoOpen}
        theme="light"
      />
      <TemplateInfoDrawer
        template={template}
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
      <EcommerceHero />
      <EcommerceTrustBar />
      <EcommerceFeatures />
      <EcommerceReviews />
      <EcommerceComparison />
      <EcommerceFAQ />
      <EcommerceCTA />
      <EcommerceFooter />
    </main>
  );
}
