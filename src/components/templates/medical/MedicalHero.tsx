import ScrollReveal from "@/components/shared/ScrollReveal";
import { Clock, ShieldCheck, Users } from "lucide-react";

const badges = [
  { icon: Clock, label: "24/7 Care" },
  { icon: ShieldCheck, label: "Board Certified" },
  { icon: Users, label: "50k+ Patients" },
];

export default function MedicalHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Subtle teal gradient blob */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-medical-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-medical-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-medical-teal/10 text-medical-teal text-sm font-medium tracking-wide mb-6">
            Trusted Healthcare Since 2009
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-medical-text leading-[1.1] mb-6">
            Your Health,
            <br />
            <span className="text-medical-teal">Our Priority</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl text-medical-text/60 max-w-2xl mx-auto mb-10 leading-relaxed font-source-sans">
            Compassionate, personalized healthcare for you and your family.
            Our team of experienced specialists is dedicated to providing
            the highest standard of medical care in a warm, welcoming
            environment.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#appointment"
              className="px-8 py-3.5 bg-medical-teal text-white font-poppins text-sm font-medium rounded-xl hover:bg-medical-teal-dark transition-colors shadow-lg shadow-medical-teal/20"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="px-8 py-3.5 border border-medical-teal text-medical-teal font-poppins text-sm font-medium rounded-xl hover:bg-medical-teal/5 transition-colors"
            >
              Our Services
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Trust badges */}
      <ScrollReveal delay={0.5} className="relative z-10 mt-20 w-full max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 text-medical-text/60"
            >
              <div className="w-10 h-10 rounded-xl bg-medical-teal/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-medical-teal" />
              </div>
              <span className="text-sm font-medium font-source-sans">
                {label}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
