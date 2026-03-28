"use client";

import { useState } from "react";
import { templates } from "@/data/templates";
import BackToGallery from "@/components/shared/BackToGallery";
import TemplateInfoDrawer from "@/components/shared/TemplateInfoDrawer";
import FitnessHero from "@/components/templates/fitness/FitnessHero";
import FitnessStats from "@/components/templates/fitness/FitnessStats";
import FitnessPrograms from "@/components/templates/fitness/FitnessPrograms";
import FitnessPricing from "@/components/templates/fitness/FitnessPricing";
import FitnessTrainers from "@/components/templates/fitness/FitnessTrainers";
import FitnessSchedule from "@/components/templates/fitness/FitnessSchedule";
import FitnessTransformations from "@/components/templates/fitness/FitnessTransformations";
import FitnessCTA from "@/components/templates/fitness/FitnessCTA";
import FitnessFooter from "@/components/templates/fitness/FitnessFooter";

const template = templates.find((t) => t.slug === "fitness");

export default function FitnessPage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  if (!template) return null;

  return (
    <main className="min-h-screen bg-fitness-bg text-white font-roboto">
      <BackToGallery
        templateName="Fitness & Gym"
        onToggleInfo={() => setIsInfoOpen(!isInfoOpen)}
        isInfoOpen={isInfoOpen}
        theme="dark"
      />
      <TemplateInfoDrawer
        template={template}
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
      <FitnessHero />
      <FitnessStats />
      <FitnessPrograms />
      <FitnessPricing />
      <FitnessTrainers />
      <FitnessSchedule />
      <FitnessTransformations />
      <FitnessCTA />
      <FitnessFooter />
    </main>
  );
}
