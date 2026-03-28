import { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "Real Estate Template | Landing Page Templates",
  description:
    "Luxury minimalist landing page for high-end real estate agencies. Elegant serif typography with champagne gold accents.",
  openGraph: {
    title: "Real Estate Template | Landing Page Templates",
    description: "Luxury real estate landing page template. Delivered in 48 hours.",
    type: "website",
    siteName: "MOVA Tech",
  },
};

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export default function RealEstateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${cormorantGaramond.variable} ${outfit.variable}`}>
      {children}
    </div>
  );
}
