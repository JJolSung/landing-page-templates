import ScrollReveal from "@/components/shared/ScrollReveal";
import {
  Code2,
  Server,
  Database,
  Shield,
  Cloud,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "React & Next.js",
    description:
      "Build modern, performant user interfaces with React 18 and Next.js App Router. Master server components and streaming.",
  },
  {
    icon: Server,
    title: "Node.js & APIs",
    description:
      "Design and build RESTful and GraphQL APIs with Express and Node.js. Handle real-world backend architecture patterns.",
  },
  {
    icon: Database,
    title: "Databases",
    description:
      "Work with PostgreSQL, MongoDB, and Redis. Learn schema design, queries, migrations, and data modeling best practices.",
  },
  {
    icon: Shield,
    title: "Authentication",
    description:
      "Implement secure auth flows with JWT, OAuth, and session management. Protect routes and handle user permissions.",
  },
  {
    icon: Cloud,
    title: "Deployment",
    description:
      "Deploy to Vercel, AWS, and Docker. Set up CI/CD pipelines, monitoring, and production-ready infrastructure.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Integrate AI features using OpenAI APIs, vector databases, and LLM patterns. Build intelligent, modern applications.",
  },
];

export default function CourseFeatures() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-course-amber/10 text-course-amber font-semibold text-sm mb-4">
              Curriculum
            </span>
            <h2 className="font-jakarta-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-course-indigo mb-4">
              What You&apos;ll Learn
            </h2>
            <p className="text-course-text/60 max-w-2xl mx-auto text-lg">
              A comprehensive, project-based curriculum designed to take you from
              beginner to job-ready full-stack developer.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <div className="group relative bg-course-bg rounded-2xl p-8 border border-course-border hover:border-course-amber/40 transition-all duration-300 hover:shadow-lg hover:shadow-course-amber/5 h-full">
                <div className="w-12 h-12 bg-course-indigo/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-course-amber/10 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-course-indigo group-hover:text-course-amber transition-colors duration-300" />
                </div>
                <h3 className="font-jakarta-sans text-xl font-bold text-course-indigo mb-3">
                  {feature.title}
                </h3>
                <p className="text-course-text/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
