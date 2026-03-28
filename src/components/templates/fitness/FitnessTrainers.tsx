import ScrollReveal from "@/components/shared/ScrollReveal";

const trainers = [
  {
    initials: "MK",
    name: "Marcus Kim",
    image: "/images/fitness/trainer-marcus.webp",
    specialty: "Strength & Conditioning",
    bio: "NSCA-certified coach with 12 years of experience training competitive athletes and everyday warriors. Specializes in progressive overload programming.",
  },
  {
    initials: "SR",
    name: "Sarah Rodriguez",
    image: "/images/fitness/trainer-sarah.webp",
    specialty: "HIIT & Functional Training",
    bio: "Former Division I athlete turned elite trainer. Her high-energy sessions are famous for delivering results in record time. ACE and CrossFit L3 certified.",
  },
  {
    initials: "JT",
    name: "Jake Thompson",
    image: "/images/fitness/trainer-jake.webp",
    specialty: "Boxing & Combat Sports",
    bio: "Amateur boxing champion with 8 years of coaching experience. Combines technical striking drills with explosive conditioning to build complete fighters.",
  },
];

export default function FitnessTrainers() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-fitness-surface">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-oswald text-sm uppercase tracking-[0.3em] text-fitness-neon mb-3">
              Meet The Team
            </p>
            <h2 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white">
              Elite Trainers
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <ScrollReveal key={trainer.name} delay={i * 0.15}>
              <div className="text-center group">
                {/* Avatar circle with image fallback */}
                <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden group-hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-shadow duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={trainer.image}
                    alt={trainer.name}
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
                  <div className="w-full h-full bg-fitness-neon flex items-center justify-center">
                    <span className="font-oswald text-3xl font-bold text-black">
                      {trainer.initials}
                    </span>
                  </div>
                </div>

                <h3 className="font-oswald text-xl font-bold uppercase text-white mb-1">
                  {trainer.name}
                </h3>
                <p className="font-oswald text-sm uppercase tracking-wider text-fitness-neon mb-4">
                  {trainer.specialty}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {trainer.bio}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
