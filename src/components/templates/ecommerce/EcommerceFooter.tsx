import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const footerLinks = {
  Shop: ["Headphones", "Earbuds", "Speakers", "Accessories"],
  Support: ["Help Center", "Shipping Info", "Returns", "Warranty"],
  Company: ["About Us", "Careers", "Press", "Sustainability"],
};

const paymentMethods = ["Visa", "MC", "Amex", "PayPal"];

const socialLinks = [
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Youtube, label: "YouTube" },
  { icon: Facebook, label: "Facebook" },
];

export default function EcommerceFooter() {
  return (
    <footer className="bg-ecommerce-dark text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-sora text-xl font-bold mb-4">
              <span className="text-ecommerce-coral">Aura</span>Sound
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Premium audio experiences crafted for those who demand the best.
              Designed in California.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-ecommerce-coral transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sora font-semibold text-sm uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-ecommerce-coral transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Payment methods */}
            <div className="flex items-center gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/60 border border-white/15 rounded bg-white/5"
                >
                  {method}
                </span>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} AuraSound. All rights reserved.
              This is a demo template.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
