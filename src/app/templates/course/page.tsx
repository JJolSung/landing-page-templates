"use client";

import { useState } from "react";
import { templates } from "@/data/templates";
import BackToGallery from "@/components/shared/BackToGallery";
import TemplateInfoDrawer from "@/components/shared/TemplateInfoDrawer";
import CourseHero from "@/components/templates/course/CourseHero";
import CourseFeatures from "@/components/templates/course/CourseFeatures";
import CourseCurriculum from "@/components/templates/course/CourseCurriculum";
import CourseInstructor from "@/components/templates/course/CourseInstructor";
import CourseTestimonials from "@/components/templates/course/CourseTestimonials";
import CoursePricing from "@/components/templates/course/CoursePricing";
import CourseEnroll from "@/components/templates/course/CourseEnroll";
import CourseFooter from "@/components/templates/course/CourseFooter";

const template = templates.find((t) => t.slug === "course");

export default function CoursePage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  if (!template) return null;

  return (
    <main className="min-h-screen overflow-x-hidden bg-course-bg text-course-text font-nunito">
      <BackToGallery
        templateName="Online Course"
        onToggleInfo={() => setIsInfoOpen(!isInfoOpen)}
        isInfoOpen={isInfoOpen}
        theme="light"
      />
      <TemplateInfoDrawer
        template={template}
        isOpen={isInfoOpen}
        onClose={() => setIsInfoOpen(false)}
      />
      <CourseHero />
      <CourseFeatures />
      <CourseCurriculum />
      <CourseInstructor />
      <CourseTestimonials />
      <CoursePricing />
      <CourseEnroll />
      <CourseFooter />
    </main>
  );
}
