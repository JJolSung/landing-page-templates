import { Apple, Play, Twitter, Github, Linkedin, Instagram } from "lucide-react";

const links = {
  Product: ["Features", "Pricing", "Security", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Help Center", "Community", "Tutorials", "API Docs"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Licenses"],
};

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export default function AppFooter() {
  return (
    <footer className="border-t border-app-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-manrope text-xl font-extrabold mb-3">
              <span className="bg-gradient-to-r from-app-indigo to-app-purple bg-clip-text text-transparent">
                Finflow
              </span>
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Take control of your finances with the most intuitive personal
              finance app on the market.
            </p>

            {/* App Store badges */}
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-app-border rounded-xl hover:border-app-indigo/30 transition-colors"
              >
                <Apple className="w-5 h-5 text-white" />
                <div>
                  <p className="text-[8px] text-slate-500 leading-none">
                    Download on the
                  </p>
                  <p className="text-xs text-white font-semibold leading-tight">
                    App Store
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-app-border rounded-xl hover:border-app-indigo/30 transition-colors"
              >
                <Play className="w-5 h-5 text-white fill-white" />
                <div>
                  <p className="text-[8px] text-slate-500 leading-none">
                    Get it on
                  </p>
                  <p className="text-xs text-white font-semibold leading-tight">
                    Google Play
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white text-sm font-semibold mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-app-border gap-4">
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Finflow. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="p-2 text-slate-600 hover:text-app-indigo-light transition-colors"
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
