import { Github, Linkedin, Youtube } from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const links = {
  Product: ["Features", "Pricing", "Changelog", "Docs", "API"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Community", "Help Center", "Templates", "Guides", "Webinars"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: XIcon, label: "X", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function SaasFooter() {
  return (
    <footer className="border-t border-saas-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white text-base font-semibold mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-base text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-saas-border gap-4">
          <p className="text-base text-zinc-600">
            &copy; {new Date().getFullYear()} FlowBoard. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="p-2 text-zinc-600 hover:text-zinc-400 transition-colors"
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
