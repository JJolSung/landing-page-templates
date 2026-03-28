"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, PlayCircle, Clock, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface Lesson {
  title: string;
  duration: string;
}

interface Module {
  number: number;
  title: string;
  lessons: Lesson[];
  totalDuration: string;
}

const modules: Module[] = [
  {
    number: 1,
    title: "Foundations of Web Development",
    totalDuration: "4h 30m",
    lessons: [
      { title: "How the Internet Works", duration: "25m" },
      { title: "HTML & Semantic Markup", duration: "45m" },
      { title: "CSS Fundamentals & Flexbox", duration: "50m" },
      { title: "JavaScript Essentials", duration: "1h 10m" },
      { title: "Developer Tools & Git", duration: "40m" },
    ],
  },
  {
    number: 2,
    title: "React & Component Architecture",
    totalDuration: "5h 15m",
    lessons: [
      { title: "React Fundamentals & JSX", duration: "50m" },
      { title: "State, Props & Data Flow", duration: "55m" },
      { title: "Hooks Deep Dive", duration: "1h 5m" },
      { title: "Forms & User Input", duration: "45m" },
      { title: "Project: Task Manager App", duration: "1h 40m" },
    ],
  },
  {
    number: 3,
    title: "Next.js & Full-Stack React",
    totalDuration: "5h 45m",
    lessons: [
      { title: "Next.js App Router & Routing", duration: "55m" },
      { title: "Server Components & Streaming", duration: "1h" },
      { title: "Data Fetching Strategies", duration: "50m" },
      { title: "API Routes & Middleware", duration: "1h 10m" },
      { title: "Project: Blog Platform", duration: "1h 50m" },
    ],
  },
  {
    number: 4,
    title: "Node.js & Backend Development",
    totalDuration: "5h 30m",
    lessons: [
      { title: "Node.js Runtime & Modules", duration: "45m" },
      { title: "Express.js & REST APIs", duration: "1h 15m" },
      { title: "Error Handling & Validation", duration: "50m" },
      { title: "File Uploads & Streams", duration: "40m" },
      { title: "Project: API for E-commerce", duration: "2h" },
    ],
  },
  {
    number: 5,
    title: "Databases & Data Modeling",
    totalDuration: "5h",
    lessons: [
      { title: "SQL & PostgreSQL Fundamentals", duration: "1h" },
      { title: "Schema Design & Migrations", duration: "55m" },
      { title: "MongoDB & NoSQL Patterns", duration: "50m" },
      { title: "ORMs: Prisma & Drizzle", duration: "45m" },
      { title: "Project: Social Media Database", duration: "1h 30m" },
    ],
  },
  {
    number: 6,
    title: "Authentication & Security",
    totalDuration: "4h 45m",
    lessons: [
      { title: "Auth Fundamentals & JWT", duration: "55m" },
      { title: "OAuth & Social Login", duration: "50m" },
      { title: "Session Management & Cookies", duration: "45m" },
      { title: "Security Best Practices", duration: "40m" },
      { title: "Project: Secure Auth System", duration: "1h 35m" },
    ],
  },
  {
    number: 7,
    title: "Deployment & DevOps",
    totalDuration: "4h 15m",
    lessons: [
      { title: "Docker & Containerization", duration: "1h" },
      { title: "CI/CD with GitHub Actions", duration: "50m" },
      { title: "Deploying to Vercel & AWS", duration: "55m" },
      { title: "Monitoring & Logging", duration: "40m" },
      { title: "Project: Production Pipeline", duration: "50m" },
    ],
  },
  {
    number: 8,
    title: "AI Integration & Capstone",
    totalDuration: "6h",
    lessons: [
      { title: "Working with OpenAI APIs", duration: "1h" },
      { title: "Vector Databases & RAG", duration: "55m" },
      { title: "Building AI-Powered Features", duration: "1h 5m" },
      { title: "Capstone: Full-Stack AI App", duration: "3h" },
    ],
  },
];

export default function CourseCurriculum() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);

  return (
    <section id="curriculum" className="py-24 px-4 sm:px-6 lg:px-8 bg-course-bg">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-course-indigo/10 text-course-indigo font-semibold text-sm mb-4">
              {modules.length} Modules &middot; {totalLessons} Lessons
            </span>
            <h2 className="font-jakarta-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-course-indigo mb-4">
              Course Curriculum
            </h2>
            <p className="text-course-text/60 max-w-2xl mx-auto text-lg">
              A structured, step-by-step path from fundamentals to building
              production-ready applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {modules.map((module, index) => (
            <ScrollReveal key={module.number} delay={index * 0.05}>
              <div className="bg-white rounded-2xl border border-course-border overflow-hidden transition-shadow hover:shadow-md">
                <button
                  onClick={() => toggleModule(index)}
                  aria-expanded={openModule === index}
                  className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-course-indigo rounded-xl flex items-center justify-center">
                    <span className="font-jakarta-sans text-sm sm:text-base font-bold text-white">
                      {String(module.number).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-jakarta-sans text-base sm:text-lg font-bold text-course-indigo truncate">
                      {module.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-course-text/50">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" />
                        {module.lessons.length} lessons
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {module.totalDuration}
                      </span>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: openModule === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-course-text/40" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openModule === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                        <div className="border-t border-course-border pt-4 space-y-1">
                          {module.lessons.map((lesson, lIndex) => (
                            <div
                              key={lIndex}
                              className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-course-bg transition-colors"
                            >
                              <PlayCircle className="w-4 h-4 text-course-amber flex-shrink-0" />
                              <span className="flex-1 text-sm text-course-text/80">
                                {lesson.title}
                              </span>
                              <span className="text-xs text-course-text/40 font-medium">
                                {lesson.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
