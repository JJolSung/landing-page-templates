import { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Fitness Template | Landing Page Templates",
  description:
    "High-energy bold landing page for gyms and fitness studios. Nike and CrossFit inspired design.",
  openGraph: {
    title: "Fitness Template | Landing Page Templates",
    description: "Bold fitness landing page template. Delivered in 48 hours.",
    type: "website",
    siteName: "MOVA Tech",
  },
};

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export default function FitnessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${oswald.variable} ${roboto.variable}`}>{children}</div>
  );
}
