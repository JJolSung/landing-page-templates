import ScrollReveal from "@/components/shared/ScrollReveal";
import CountUp from "@/components/shared/CountUp";
import { ArrowRight, Play, Calendar, Users } from "lucide-react";

export default function CourseHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-course-bg via-course-bg to-amber-50/50" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-course-amber/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-course-indigo/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-course-indigo/10 border border-course-border text-sm text-course-indigo font-medium mb-8">
            <Calendar className="w-4 h-4 text-course-amber" />
            Next cohort starts Jan 15
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-jakarta-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-course-indigo leading-[1.1] mb-6">
            Transform Your Career
            <br />
            <span className="text-course-amber">in 12 Weeks</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl text-course-text/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Master Full-Stack Development from zero to deployment. Learn React,
            Node.js, databases, and more with hands-on projects and expert
            mentorship.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#pricing"
              className="px-8 py-4 bg-course-amber hover:bg-course-amber-dark text-white rounded-xl font-bold text-base transition-colors flex items-center gap-2 shadow-lg shadow-course-amber/25"
            >
              Enroll Now — $497
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#curriculum"
              className="px-8 py-4 bg-white text-course-indigo rounded-xl font-bold text-base border-2 border-course-border hover:border-course-indigo/30 transition-colors flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Watch Preview
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex items-center justify-center gap-3 text-sm text-course-text/60">
            <Users className="w-4 h-4 text-course-amber" />
            <span>
              <CountUp
                end={4200}
                suffix="+"
                className="font-bold text-course-indigo"
              />{" "}
              students enrolled
            </span>
            <span className="w-1 h-1 bg-course-text/30 rounded-full" />
            <span>4.9/5 average rating</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
