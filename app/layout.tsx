import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/shared/components/Header";
import { StickyFooterAd } from "@/shared/components/StickyFooterAd";
import Footer from "@/shared/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CTT Play",
  description: "Información actualizada diariamente en Tostado Santa Fe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <StickyFooterAd
          text="Suscribite a La Nación"
          buttonText="Oferta Especial"
          href="/suscripciones"
          accentColor="text-blue-400 hover:bg-blue-400"
        />
        <Footer />
      </body>
    </html>
  );
}
