import ScrollReveal from "@/components/shared/ScrollReveal";
import { Mail } from "lucide-react";

const agents = [
  {
    name: "Victoria Harrington",
    title: "Senior Luxury Advisor",
    initial: "VH",
    image: "/images/realestate/agent-victoria.webp",
    email: "victoria@prestigeestates.com",
    speciality: "Manhattan Penthouses",
  },
  {
    name: "James Whitfield",
    title: "Principal Broker",
    initial: "JW",
    image: "/images/realestate/agent-james.webp",
    email: "james@prestigeestates.com",
    speciality: "Waterfront Estates",
  },
  {
    name: "Isabella Moreau",
    title: "International Sales Director",
    initial: "IM",
    image: "/images/realestate/agent-isabella.webp",
    email: "isabella@prestigeestates.com",
    speciality: "Global Luxury Properties",
  },
];

export default function RealEstateAgents() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-realestate-surface">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-realestate-gold text-sm font-medium uppercase tracking-[0.2em] mb-3">
              Our Team
            </p>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-realestate-charcoal mb-4">
              Meet Our Advisors
            </h2>
            <p className="text-realestate-charcoal-light max-w-xl mx-auto">
              Dedicated professionals with decades of combined experience in
              luxury real estate.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {agents.map((agent, i) => (
            <ScrollReveal key={agent.name} delay={i * 0.15}>
              <div className="text-center group">
                {/* Avatar with image fallback */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full overflow-hidden mb-5 group-hover:scale-105 transition-transform duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={agent.image}
                    alt={agent.name}
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
                  <div className="w-full h-full bg-realestate-gold flex items-center justify-center text-white font-cormorant text-2xl font-medium">
                    {agent.initial}
                  </div>
                </div>
                <h3 className="font-cormorant text-2xl font-medium text-realestate-charcoal mb-1">
                  {agent.name}
                </h3>
                <p className="text-realestate-gold text-sm font-medium mb-1">
                  {agent.title}
                </p>
                <p className="text-realestate-charcoal-light text-xs mb-5">
                  Speciality: {agent.speciality}
                </p>
                <a
                  href={`mailto:${agent.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-realestate-charcoal/20 rounded-lg text-sm text-realestate-charcoal hover:border-realestate-gold hover:text-realestate-gold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
