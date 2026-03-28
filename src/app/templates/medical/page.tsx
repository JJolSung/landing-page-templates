"use client";

import { useState } from "react";
import { templates } from "@/data/templates";
import BackToGallery from "@/components/shared/BackToGallery";
import TemplateInfoDrawer from "@/components/shared/TemplateInfoDrawer";
import MedicalHero from "@/components/templates/medical/MedicalHero";
import MedicalServices from "@/components/templates/medical/MedicalServices";
import MedicalDoctors from "@/components/templates/medical/MedicalDoctors";
import MedicalStats from "@/components/templates/medical/MedicalStats";
import MedicalTestimonials from "@/components/templates/medical/MedicalTestimonials";
import MedicalAppointment from "@/components/templates/medical/MedicalAppointment";
import MedicalInfo from "@/components/templates/medical/MedicalInfo";
import MedicalFooter from "@/components/templates/medical/MedicalFooter";

const template = templates.find((t) => t.slug === "medical");

export default function MedicalPage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  if (!template) return null;

  return (
    <main className="min-h-screen bg-medical-bg text-medical-text font-source-sans">
      <BackToGallery
        templateName="Medical Clinic"
        onToggleInfo={() => setIsInfoOpen(!isInfoOpen)}
        isInfoOpen={isInfoOpen}
        theme="light"
      />
      <TemplateInfoDrawer
        template={template}
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
      <MedicalHero />
      <MedicalServices />
      <MedicalDoctors />
      <MedicalStats />
      <MedicalTestimonials />
      <MedicalAppointment />
      <MedicalInfo />
      <MedicalFooter />
    </main>
  );
}
