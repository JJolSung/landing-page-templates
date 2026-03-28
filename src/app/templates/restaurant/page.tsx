"use client";

import { useState } from "react";
import { templates } from "@/data/templates";
import BackToGallery from "@/components/shared/BackToGallery";
import TemplateInfoDrawer from "@/components/shared/TemplateInfoDrawer";
import RestaurantHero from "@/components/templates/restaurant/RestaurantHero";
import RestaurantStory from "@/components/templates/restaurant/RestaurantStory";
import RestaurantMenu from "@/components/templates/restaurant/RestaurantMenu";
import RestaurantExperiences from "@/components/templates/restaurant/RestaurantExperiences";
import RestaurantGallery from "@/components/templates/restaurant/RestaurantGallery";
import RestaurantReservation from "@/components/templates/restaurant/RestaurantReservation";
import RestaurantInfo from "@/components/templates/restaurant/RestaurantInfo";
import RestaurantFooter from "@/components/templates/restaurant/RestaurantFooter";

const template = templates.find((t) => t.slug === "restaurant");

export default function RestaurantPage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  if (!template) return null;

  return (
    <main className="min-h-screen overflow-x-hidden bg-restaurant-bg text-restaurant-green font-lato">
      <BackToGallery
        templateName="Restaurant & Caf\u00e9"
        onToggleInfo={() => setIsInfoOpen(!isInfoOpen)}
        isInfoOpen={isInfoOpen}
        theme="light"
      />
      <TemplateInfoDrawer
        template={template}
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
      <RestaurantHero />
      <RestaurantStory />
      <RestaurantMenu />
      <RestaurantExperiences />
      <RestaurantGallery />
      <RestaurantReservation />
      <RestaurantInfo />
      <RestaurantFooter />
    </main>
  );
}
