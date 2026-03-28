import { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";

export const metadata: Metadata = {
  title: "Restaurant Template | Landing Page Templates",
  description:
    "Warm and luxurious landing page for fine dining restaurants and cafés. Michelin-guide inspired elegance.",
  openGraph: {
    title: "Restaurant Template | Landing Page Templates",
    description: "Elegant restaurant landing page template. Delivered in 48 hours.",
    type: "website",
    siteName: "MOVA Tech",
  },
};

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${playfairDisplay.variable} ${lato.variable}`}>
      {children}
    </div>
  );
}
