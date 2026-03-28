import ScrollReveal from "@/components/shared/ScrollReveal";
import { Github, Linkedin, Twitter, Award, Briefcase, GraduationCap } from "lucide-react";

const credentials = [
  {
    icon: Briefcase,
    text: "12+ years as a Full-Stack Engineer at Google, Stripe, and Vercel",
  },
  {
    icon: GraduationCap,
    text: "M.S. in Computer Science from Stanford University",
  },
  {
    icon: Award,
    text: "Taught 15,000+ students across 4 online courses",
  },
  {
    icon: Briefcase,
    text: "Open-source contributor with 8,000+ GitHub stars",
  },
  {
    icon: Award,
    text: "Speaker at React Conf, Node Congress, and Next.js Conf",
  },
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function CourseInstructor() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-course-amber/10 text-course-amber font-semibold text-sm mb-4">
              Your Instructor
            </span>
            <h2 className="font-jakarta-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-course-indigo mb-4">
              Learn From the Best
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="flex flex-col items-center lg:items-center">
              {/* Avatar with image fallback */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden mb-6 shadow-xl shadow-course-indigo/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/course/instructor-alex.webp"
                  alt="Alex Morgan"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300"
                  onLoad={(e) => {
                    e.currentTarget.classList.remove("opacity-0");
                    e.currentTarget.classList.add("opacity-100");
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = "none";
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Initials fallback */}
                <div className="w-full h-full bg-course-indigo flex items-center justify-center">
                  <span className="font-jakarta-sans text-6xl sm:text-7xl font-extrabold text-white">
                    AM
                  </span>
                </div>
              </div>

              {/* Name & Title */}
              <h3 className="font-jakarta-sans text-2xl sm:text-3xl font-extrabold text-course-indigo mb-1">
                Alex Morgan
              </h3>
              <p className="text-course-amber font-semibold mb-4">
                Senior Full-Stack Engineer & Educator
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-course-bg border border-course-border flex items-center justify-center text-course-text/50 hover:text-course-indigo hover:border-course-indigo/30 transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div>
              <p className="text-course-text/70 text-lg leading-relaxed mb-8">
                Hi, I&apos;m Alex! I&apos;ve spent over a decade building products at
                some of the world&apos;s best tech companies. After years of
                mentoring junior developers, I created this course to share the
                real-world skills that actually matter in the industry. My
                teaching philosophy is simple: learn by building. Every concept
                in this course is tied to a hands-on project that mirrors what
                you&apos;ll do on the job.
              </p>

              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-course-amber/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <credential.icon className="w-4 h-4 text-course-amber" />
                    </div>
                    <p className="text-course-text/70">
                      {credential.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
