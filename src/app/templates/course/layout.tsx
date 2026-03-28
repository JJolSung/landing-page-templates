import { Metadata } from "next";
import { Plus_Jakarta_Sans, Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "Online Course Template | Landing Page Templates",
  description:
    "Inspiring landing page for online courses, coaching programs, and webinars. Warm and approachable design.",
  openGraph: {
    title: "Online Course Template | Landing Page Templates",
    description: "Warm educational landing page template. Delivered in 48 hours.",
    type: "website",
    siteName: "MOVA Tech",
  },
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${plusJakartaSans.variable} ${nunito.variable}`}>
      {children}
    </div>
  );
}
