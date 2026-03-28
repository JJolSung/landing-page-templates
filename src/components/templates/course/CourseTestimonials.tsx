import ScrollReveal from "@/components/shared/ScrollReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    before: "Junior Dev",
    after: "Senior Engineer at Google",
    rating: 5,
    quote:
      "This course completely changed my career trajectory. The curriculum is incredibly well-structured, and the hands-on projects gave me a real portfolio to show employers. Within 3 months of finishing, I landed my dream job.",
    initial: "SC",
  },
  {
    name: "Marcus Williams",
    before: "Career Changer",
    after: "Full-Stack Dev at Stripe",
    rating: 5,
    quote:
      "As someone switching from marketing, I was worried I'd be lost. Alex explains everything so clearly and the community support is amazing. The mentoring sessions were worth every penny — it's like having a senior dev in your corner.",
    initial: "MW",
  },
  {
    name: "Priya Patel",
    before: "Bootcamp Grad",
    after: "Lead Developer at Shopify",
    rating: 5,
    quote:
      "I'd tried other courses, but this was the first one that taught me how to think like a real engineer. The AI integration module is cutting-edge — my capstone project actually impressed interviewers and helped me stand out.",
    initial: "PP",
  },
];

export default function CourseTestimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-course-bg">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-course-indigo/10 text-course-indigo font-semibold text-sm mb-4">
              Student Success
            </span>
            <h2 className="font-jakarta-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-course-indigo mb-4">
              What Our Students Say
            </h2>
            <p className="text-course-text/60 max-w-2xl mx-auto text-lg">
              Join thousands of students who have transformed their careers
              through this program.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
              <div className="bg-white rounded-2xl p-8 border border-course-border h-full flex flex-col">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-course-amber fill-course-amber"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1 mb-6">
                  <Quote className="w-8 h-8 text-course-amber/20 absolute -top-1 -left-1" />
                  <p className="text-course-text/70 leading-relaxed relative z-10 pl-2 pt-2">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 border-t border-course-border">
                  <div className="w-12 h-12 rounded-full bg-course-indigo flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-white">
                      {testimonial.initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-jakarta-sans font-bold text-course-indigo">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-course-text/50">
                      <span>{testimonial.before}</span>
                      <span className="mx-1.5 text-course-amber font-bold">&rarr;</span>
                      <span className="text-course-amber font-medium">{testimonial.after}</span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
