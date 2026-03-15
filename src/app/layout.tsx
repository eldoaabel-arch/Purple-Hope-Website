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
  description: "Pancreatic cancer research nonprofit",
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