import { Metadata } from "next";
import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  title: "Mobile App Template | Landing Page Templates",
  description:
    "Fresh, gradient-rich landing page for mobile apps and startups. Modern and playful with app store integration.",
  openGraph: {
    title: "Mobile App Template | Landing Page Templates",
    description: "Fresh startup landing page template. Delivered in 48 hours.",
    type: "website",
    siteName: "MOVA Tech",
  },
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${manrope.variable}`}>
      {children}
    </div>
  );
}
