import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Purple Hope",
  description: "A student-led fundraising campaign supporting pancreatic cancer research through the Canadian Cancer Society.",
  openGraph: {
    title: "Purple Hope",
    description: "A student-led fundraising campaign supporting pancreatic cancer research through the Canadian Cancer Society.",
    url: "https://purplehope.ca",
    images: [
      {
        url: "https://purplehope.ca/images/fallback.jpg",
        width: 1200,
        height: 630,
        alt: "Purple Hope Campaign",
      }
    ],
    siteName: "Purple Hope",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${barlow.variable} ${cormorantGaramond.variable}`}>
        {children}
      </body>
    </html>
  );
}
