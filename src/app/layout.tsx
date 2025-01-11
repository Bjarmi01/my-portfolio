'use client';

// import type { Metadata } from "next";
import { usePathname } from "next/navigation"
import { Geist, Geist_Mono } from "next/font/google";
import { SectionProvider } from "./context/SectionContext";
import Head from 'next/head';
import LandingNavbar from "./components/LandingNavbar";
import DefaultNavbar from "./components/DefaultNavbar";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SectionProvider>
          {pathname === '/' ? <LandingNavbar /> : <DefaultNavbar />}
          {children}
          {pathname === '/' ? '' : <Footer />}
        </SectionProvider>
      </body>
    </html>
  );
}
