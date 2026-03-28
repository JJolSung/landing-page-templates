import ScrollReveal from "@/components/shared/ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The care I received at this clinic was exceptional. Dr. Richardson took the time to listen to all my concerns and developed a thorough treatment plan. I finally feel like I have a healthcare team that truly cares.",
    name: "Jennifer M.",
    treatment: "Internal Medicine",
    rating: 5,
  },
  {
    quote:
      "After years of dealing with chronic back pain, the orthopedics team here changed my life. The staff is incredibly professional, and the facility is spotless. I recommend them to everyone I know.",
    name: "Robert T.",
    treatment: "Orthopedic Care",
    rating: 5,
  },
  {
    quote:
      "Dr. Patel has been our family pediatrician for five years. She is wonderful with our children and always makes them feel comfortable. The online booking system makes scheduling appointments so easy.",
    name: "Amanda L.",
    treatment: "Pediatric Care",
    rating: 5,
  },
];

export default function MedicalTestimonials() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-medical-teal/10 text-medical-teal text-sm font-medium tracking-wide mb-4">
              Testimonials
            </span>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-semibold text-medical-text mb-4">
              What Our Patients Say
            </h2>
            <p className="text-medical-text/60 max-w-2xl mx-auto font-source-sans">
              Real stories from real patients who trust us with their health
              and the health of their families.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
              <div className="bg-medical-surface rounded-xl p-6 border-l-4 border-medical-teal shadow-sm h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-medical-teal text-medical-teal"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-medical-text/70 text-sm leading-relaxed font-source-sans mb-6 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Patient info */}
                <div className="pt-4 border-t border-medical-border">
                  <p className="font-poppins font-semibold text-medical-text text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-medical-teal text-xs font-source-sans">
                    {testimonial.treatment}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
