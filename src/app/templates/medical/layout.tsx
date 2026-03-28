import { Metadata } from "next";
import { Poppins, Source_Sans_3 } from "next/font/google";

export const metadata: Metadata = {
  title: "Medical Clinic Template | Landing Page Templates",
  description:
    "Clean, trust-focused landing page for healthcare clinics and telehealth services. Calming teal tones with clinical precision.",
  openGraph: {
    title: "Medical Clinic Template | Landing Page Templates",
    description: "Clean healthcare landing page template. Delivered in 48 hours.",
    type: "website",
    siteName: "MOVA Tech",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  display: "swap",
});

export default function MedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${poppins.variable} ${sourceSans3.variable}`}>
      {children}
    </div>
  );
}
