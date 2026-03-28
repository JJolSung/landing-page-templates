import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

const links = {
  Product: ["Features", "Pricing", "Changelog", "Docs", "API"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Community", "Help Center", "Templates", "Guides", "Webinars"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
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
              <h4 className="text-white text-sm font-semibold mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
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
          <p className="text-sm text-zinc-600">
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
