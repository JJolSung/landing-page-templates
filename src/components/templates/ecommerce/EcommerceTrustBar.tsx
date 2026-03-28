import { Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react";

const trustItems = [
  { icon: Truck, label: "Free Shipping" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: ShieldCheck, label: "2-Year Warranty" },
  { icon: Headphones, label: "24/7 Support" },
];

export default function EcommerceTrustBar() {
  return (
    <section className="bg-ecommerce-coral py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-white">
            <item.icon className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-medium whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
