import { Check, X } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const rows = [
  {
    label: "Price",
    ours: "$299",
    compA: "$349",
    compB: "$279",
  },
  {
    label: "Battery Life",
    ours: "40 hours",
    compA: "30 hours",
    compB: "20 hours",
  },
  {
    label: "Active Noise Cancellation",
    ours: true,
    compA: true,
    compB: false,
  },
  {
    label: "Spatial Audio",
    ours: true,
    compA: false,
    compB: false,
  },
  {
    label: "Weight",
    ours: "250g",
    compA: "260g",
    compB: "275g",
  },
  {
    label: "Rating",
    ours: "4.9 / 5",
    compA: "4.3 / 5",
    compB: "4.1 / 5",
  },
];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="flex items-center justify-center">
        <Check className="w-5 h-5 text-green-500" />
        <span className="sr-only">Yes</span>
      </span>
    ) : (
      <span className="flex items-center justify-center">
        <X className="w-5 h-5 text-gray-300" />
        <span className="sr-only">No</span>
      </span>
    );
  }
  return <span>{value}</span>;
}

export default function EcommerceComparison() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-ecommerce-coral text-sm font-medium uppercase tracking-wider mb-3">
              Compare
            </p>
            <h2 className="font-sora text-3xl sm:text-4xl font-bold text-ecommerce-dark">
              See how we stack up
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-sm font-medium text-ecommerce-muted w-1/4">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-center w-1/4">
                    <div className="bg-ecommerce-coral text-white rounded-t-xl px-4 py-3 -mb-4">
                      <p className="font-sora font-bold text-sm">
                        AuraSound Pro
                      </p>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-sm font-medium text-ecommerce-muted text-center w-1/4">
                    Competitor A
                  </th>
                  <th className="py-4 px-4 text-sm font-medium text-ecommerce-muted text-center w-1/4">
                    Competitor B
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={
                      i % 2 === 0 ? "bg-ecommerce-bg" : "bg-ecommerce-surface"
                    }
                  >
                    <td className="py-4 px-4 text-sm font-medium text-ecommerce-dark">
                      {row.label}
                    </td>
                    <td className="py-4 px-4 text-center text-sm font-semibold text-ecommerce-dark bg-ecommerce-coral/5 border-x border-ecommerce-border">
                      <CellValue value={row.ours} />
                    </td>
                    <td className="py-4 px-4 text-center text-sm text-ecommerce-muted">
                      <CellValue value={row.compA} />
                    </td>
                    <td className="py-4 px-4 text-center text-sm text-ecommerce-muted">
                      <CellValue value={row.compB} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
