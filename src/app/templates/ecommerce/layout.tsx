import { Metadata } from "next";
import { Sora, Libre_Franklin } from "next/font/google";

export const metadata: Metadata = {
  title: "E-commerce Template | Landing Page Templates",
  description:
    "Vibrant product launch page for DTC brands and e-commerce stores. Conversion-focused with bold visuals.",
  openGraph: {
    title: "E-commerce Template | Landing Page Templates",
    description: "Vibrant e-commerce landing page template. Delivered in 48 hours.",
    type: "website",
    siteName: "MOVA Tech",
  },
};

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  display: "swap",
});

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${sora.variable} ${libreFranklin.variable}`}>
      {children}
    </div>
  );
}
