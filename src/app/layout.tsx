'use client';

import { Analytics } from "@vercel/analytics/react"
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
        <meta name="theme-color" content="#4831d4"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SectionProvider>
          {pathname === '/' ? <LandingNavbar /> : <DefaultNavbar />}
          {children}
          <Analytics />
          {pathname === '/' ? '' : <Footer />}
        </SectionProvider>
      </body>
    </html>
  );
}
