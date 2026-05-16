import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ENT Lecture — The Only ENT Resource You Need",
  description:
    "The #1 most trusted ENT textbook by Dr. Rahul Bagla — 160+ chapters, 850+ clinical photos, and 300+ diagrams for MBBS, NEET PG, USMLE, PLAB & MRCS aspirants.",
  keywords: [
    "ENT textbook",
    "Otorhinolaryngology",
    "MBBS",
    "NEET PG",
    "USMLE",
    "Rahul Bagla",
    "medical education",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
