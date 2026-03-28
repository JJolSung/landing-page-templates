import { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import GalleryFooter from "@/components/gallery/GalleryFooter";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landing Page Templates | MOVA Tech",
  description:
    "4 production-quality landing page templates for SaaS, Restaurant, Fitness, and Real Estate. Professionally crafted, delivered in 48 hours.",
  openGraph: {
    title: "Landing Page Templates | MOVA Tech",
    description:
      "Production-quality landing page templates delivered in 48 hours.",
    type: "website",
    siteName: "MOVA Tech",
  },
};

export default function GalleryPage() {
  return (
    <main
      className={`${instrumentSerif.variable} min-h-screen bg-gallery-bg text-gallery-text`}
    >
      <GalleryHero />
      <GalleryGrid />
      <GalleryCTA />
      <GalleryFooter />
    </main>
  );
}
