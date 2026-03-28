import ScrollReveal from "@/components/shared/ScrollReveal";
import { MapPin, Clock, Phone, AlertCircle } from "lucide-react";

const hours = [
  { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
  { day: "Saturday", time: "9:00 AM - 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const insurancePartners = [
  "Blue Cross",
  "Aetna",
  "UnitedHealth",
  "Cigna",
  "Humana",
  "Kaiser",
];

export default function MedicalInfo() {
  return (
    <section id="info" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-medical-teal/10 text-medical-teal text-sm font-medium tracking-wide mb-4">
              Visit Us
            </span>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-semibold text-medical-text mb-4">
              Location & Hours
            </h2>
            <p className="text-medical-text/60 max-w-2xl mx-auto font-source-sans">
              Conveniently located in the heart of downtown, with ample
              parking and easy access to public transit.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left column: Map placeholder + Address */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-medical-teal/20 to-medical-teal/5 border border-medical-border h-56 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-medical-teal/40 mx-auto mb-3" />
                  <p className="font-poppins text-sm text-medical-text/40">
                    450 Wellness Boulevard
                  </p>
                  <p className="text-xs text-medical-text/30 font-source-sans">
                    New York, NY 10016
                  </p>
                </div>
              </div>

              {/* Address details */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-medical-teal" />
                  <h3 className="font-poppins text-lg font-semibold text-medical-text">
                    Our Address
                  </h3>
                </div>
                <div className="pl-8 text-medical-text/60 font-source-sans">
                  <p>450 Wellness Boulevard, Suite 200</p>
                  <p>New York, NY 10016</p>
                  <p className="text-sm text-medical-text/40 mt-2">
                    Free parking available on-site
                  </p>
                </div>
              </div>

              {/* Emergency contact */}
              <div className="bg-medical-teal/5 rounded-xl p-5 border border-medical-border">
                <div className="flex items-center gap-3 mb-2">
                  <AlertCircle className="w-5 h-5 text-medical-teal" />
                  <h3 className="font-poppins text-sm font-semibold text-medical-text">
                    Emergency Contact
                  </h3>
                </div>
                <a
                  href="tel:+15559110000"
                  className="block pl-8 text-medical-teal font-semibold text-lg font-poppins hover:underline"
                >
                  +1 (555) 911-0000
                </a>
                <p className="pl-8 text-medical-text/50 text-xs font-source-sans mt-1">
                  Available 24 hours a day, 7 days a week
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column: Hours + Contact + Insurance */}
          <ScrollReveal direction="right">
            <div className="space-y-8">
              {/* Hours */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-medical-teal" />
                  <h3 className="font-poppins text-lg font-semibold text-medical-text">
                    Office Hours
                  </h3>
                </div>
                <div className="pl-8 space-y-3">
                  {hours.map(({ day, time }) => (
                    <div
                      key={day}
                      className="flex justify-between text-sm max-w-xs"
                    >
                      <span className="text-medical-text/60 font-source-sans">
                        {day}
                      </span>
                      <span
                        className={`font-source-sans ${
                          time === "Closed"
                            ? "text-medical-text/40 italic"
                            : "text-medical-text/70"
                        }`}
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-5 h-5 text-medical-teal" />
                  <h3 className="font-poppins text-lg font-semibold text-medical-text">
                    Contact
                  </h3>
                </div>
                <div className="pl-8 space-y-1 font-source-sans">
                  <a
                    href="tel:+15552345678"
                    className="block text-medical-text/70 hover:text-medical-teal transition-colors"
                  >
                    +1 (555) 234-5678
                  </a>
                  <a
                    href="mailto:info@wellnessclinic.com"
                    className="block text-medical-text/70 hover:text-medical-teal transition-colors"
                  >
                    info@wellnessclinic.com
                  </a>
                </div>
              </div>

              {/* Insurance partners */}
              <div>
                <h3 className="font-poppins text-lg font-semibold text-medical-text mb-4">
                  Accepted Insurance
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {insurancePartners.map((partner) => (
                    <div
                      key={partner}
                      className="bg-medical-bg rounded-xl py-3 px-4 text-center border border-medical-border"
                    >
                      <span className="text-xs font-medium text-medical-text/50 font-source-sans">
                        {partner}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-medical-text/40 mt-3 font-source-sans">
                  We accept most major insurance plans. Contact us to verify
                  your coverage.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
