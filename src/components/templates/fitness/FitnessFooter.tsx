import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const links = {
  Programs: ["Weight Training", "HIIT", "Boxing", "Yoga", "Personal Training"],
  Company: ["About Us", "Trainers", "Careers", "Blog", "Press"],
  Support: ["FAQs", "Contact", "Schedule", "Membership", "Cancellation"],
};

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

export default function FitnessFooter() {
  return (
    <footer className="border-t border-fitness-border bg-fitness-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-oswald text-2xl font-bold uppercase text-white mb-3">
              Iron<span className="text-fitness-neon">Forge</span>
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Push harder. Go further. Break through every barrier standing
              between you and your strongest self.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-oswald text-sm font-bold uppercase tracking-wider text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-fitness-neon transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-fitness-border gap-4">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} IronForge Fitness. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="p-2 text-zinc-600 hover:text-fitness-neon transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
