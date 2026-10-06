import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Wasee On The Go — Expeditions & Travel Journal",
  description: "Award-winning international travel journalism across scenic rail routes, alpine trails, cultural sanctuaries, and untamed horizons worldwide.",
  keywords: ["Wasee On The Go", "international travel", "travel blog", "Japan itinerary", "Swiss Alps", "Iceland Ring Road", "travel journal"],
  openGraph: {
    title: "Wasee On The Go — Expeditions & Travel Journal",
    description: "Award-winning international travel journalism across scenic rail routes, alpine trails, cultural sanctuaries, and untamed horizons worldwide.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/logo-icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
