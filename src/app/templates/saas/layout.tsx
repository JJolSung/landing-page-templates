import { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "SaaS Product Template | Landing Page Templates",
  description:
    "Modern dark-themed landing page for SaaS products and developer tools. Inspired by Linear, Vercel, and Raycast.",
  openGraph: {
    title: "SaaS Product Template | Landing Page Templates",
    description: "Modern dark-themed SaaS landing page template. Delivered in 48 hours.",
    type: "website",
    siteName: "MOVA Tech",
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function SaasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      {children}
    </div>
  );
}
