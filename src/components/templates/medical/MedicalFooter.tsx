import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const serviceLinks = [
  "General Medicine",
  "Dermatology",
  "Pediatrics",
  "Cardiology",
  "Orthopedics",
  "Dental Care",
];

const aboutLinks = [
  "Our Story",
  "Our Doctors",
  "Careers",
  "News & Blog",
  "Patient Resources",
];

const contactLinks = [
  { label: "+1 (555) 234-5678", href: "tel:+15552345678" },
  { label: "info@wellnessclinic.com", href: "mailto:info@wellnessclinic.com" },
  { label: "450 Wellness Blvd, NY", href: "#" },
  { label: "Patient Portal", href: "#" },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export default function MedicalFooter() {
  return (
    <footer className="bg-medical-surface border-t border-medical-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Clinic name & description */}
          <div>
            <h2 className="font-poppins text-xl font-semibold text-medical-text mb-3">
              Wellness Clinic
            </h2>
            <p className="text-medical-text/50 text-sm leading-relaxed font-source-sans mb-5">
              Providing compassionate, comprehensive healthcare for families
              since 2009. Your health is our mission.
            </p>
            <div className="flex items-center gap-1">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 text-medical-text/30 hover:text-medical-teal transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins text-sm font-semibold text-medical-text uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-medical-text/50 text-sm font-source-sans hover:text-medical-teal transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-poppins text-sm font-semibold text-medical-text uppercase tracking-wider mb-4">
              About
            </h3>
            <ul className="space-y-2.5">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-medical-text/50 text-sm font-source-sans hover:text-medical-teal transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins text-sm font-semibold text-medical-text uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-medical-text/50 text-sm font-source-sans hover:text-medical-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-medical-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-medical-text/30 text-xs font-source-sans">
            &copy; {new Date().getFullYear()} Wellness Clinic. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-medical-text/30 text-xs font-source-sans hover:text-medical-teal transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-medical-text/30 text-xs font-source-sans hover:text-medical-teal transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-medical-text/30 text-xs font-source-sans hover:text-medical-teal transition-colors">
              HIPAA Notice
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
