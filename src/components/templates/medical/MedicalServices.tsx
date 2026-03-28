import ScrollReveal from "@/components/shared/ScrollReveal";
import {
  Stethoscope,
  Sparkles,
  Baby,
  Heart,
  Bone,
  SmilePlus,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    description:
      "Comprehensive primary care for all ages, including routine checkups, chronic disease management, and preventive health screenings.",
  },
  {
    icon: Sparkles,
    title: "Dermatology",
    description:
      "Expert skin, hair, and nail care from board-certified dermatologists. Treatments for acne, eczema, and cosmetic procedures.",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description:
      "Dedicated child healthcare from newborns to adolescents. Well-child visits, vaccinations, and developmental assessments.",
  },
  {
    icon: Heart,
    title: "Cardiology",
    description:
      "Advanced heart health diagnostics and treatment. EKGs, stress tests, echocardiograms, and ongoing cardiac care.",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description:
      "Musculoskeletal care for bones, joints, and muscles. Sports injuries, arthritis treatment, and rehabilitation programs.",
  },
  {
    icon: SmilePlus,
    title: "Dental Care",
    description:
      "Full-service dental care including cleanings, fillings, whitening, and restorative dentistry in a comfortable setting.",
  },
];

export default function MedicalServices() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-medical-surface"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-medical-teal/10 text-medical-teal text-sm font-medium tracking-wide mb-4">
              What We Offer
            </span>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-semibold text-medical-text mb-4">
              Our Medical Services
            </h2>
            <p className="text-medical-text/60 max-w-2xl mx-auto font-source-sans">
              We provide a wide range of healthcare services to meet the needs
              of you and your family, all under one roof.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="bg-white rounded-xl p-6 border border-medical-border shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-medical-teal/10 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-medical-teal" />
                </div>
                <h3 className="font-poppins text-lg font-semibold text-medical-text mb-2">
                  {service.title}
                </h3>
                <p className="text-medical-text/60 text-sm leading-relaxed font-source-sans">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
