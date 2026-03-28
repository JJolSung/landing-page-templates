import ScrollReveal from "@/components/shared/ScrollReveal";

const doctors = [
  {
    initials: "SR",
    name: "Dr. Sarah Richardson",
    image: "/images/medical/doctor-sarah.webp",
    specialty: "Internal Medicine",
    experience: "15+ years experience",
    bio: "Board-certified internist specializing in preventive medicine and chronic disease management. Dr. Richardson is passionate about building long-term patient relationships and holistic health approaches.",
  },
  {
    initials: "MK",
    name: "Dr. Michael Kim",
    image: "/images/medical/doctor-michael.webp",
    specialty: "Cardiology",
    experience: "20+ years experience",
    bio: "Fellowship-trained cardiologist with expertise in interventional cardiology and cardiac imaging. Known for his patient-centered approach and dedication to heart health education.",
  },
  {
    initials: "EP",
    name: "Dr. Elena Patel",
    image: "/images/medical/doctor-elena.webp",
    specialty: "Pediatrics",
    experience: "12+ years experience",
    bio: "Compassionate pediatrician dedicated to children's health from infancy through adolescence. Dr. Patel specializes in developmental pediatrics and childhood nutrition.",
  },
];

export default function MedicalDoctors() {
  return (
    <section
      id="doctors"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-medical-teal/10 text-medical-teal text-sm font-medium tracking-wide mb-4">
              Our Team
            </span>
            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-semibold text-medical-text mb-4">
              Meet Our Doctors
            </h2>
            <p className="text-medical-text/60 max-w-2xl mx-auto font-source-sans">
              Our experienced medical professionals are committed to providing
              exceptional care with empathy and expertise.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <ScrollReveal key={doctor.name} delay={index * 0.15}>
              <div className="bg-medical-surface rounded-xl p-6 border border-medical-border h-full">
                {/* Avatar with image fallback */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={doctor.image}
                    alt={doctor.name}
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
                  <div className="w-full h-full bg-medical-teal flex items-center justify-center">
                    <span className="text-white font-poppins text-lg font-semibold">
                      {doctor.initials}
                    </span>
                  </div>
                </div>

                {/* Name & specialty */}
                <h3 className="font-poppins text-lg font-semibold text-medical-text mb-1">
                  {doctor.name}
                </h3>
                <p className="text-medical-teal font-medium text-sm mb-1 font-source-sans">
                  {doctor.specialty}
                </p>
                <p className="text-medical-text/50 text-xs mb-4 font-source-sans">
                  {doctor.experience}
                </p>

                {/* Divider */}
                <div className="h-px bg-medical-border mb-4" />

                {/* Bio */}
                <p className="text-medical-text/60 text-sm leading-relaxed font-source-sans">
                  {doctor.bio}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
