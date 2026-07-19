import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import StructuredData from "@/components/structured-data";
import PWARegister from "@/components/pwa-register";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ushnafatima.vercel.app"),

  title: {
    default: "Ushna Fatima | Frontend Developer",
    template: "%s | Ushna Fatima",
  },

  description:
    "Frontend Developer specializing in modern, responsive, and high-performance web applications built with React, Next.js, TypeScript, and Tailwind CSS.",

  keywords: [
    "Ushna Fatima",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Web Developer Pakistan",
    "UI Developer",
  ],

  authors: [
    {
      name: "Ushna Fatima",
    },
  ],

  creator: "Ushna Fatima",

  publisher: "Ushna Fatima",

  applicationName: "Ushna Portfolio",

  category: "Technology",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: "/branding/favicon.ico" },
      { url: "/branding/favicon-32x32.png", sizes: "32x32" },
      { url: "/branding/favicon-16x16.png", sizes: "16x16" },
    ],

    apple: "/branding/apple-icon.png",
  },

  openGraph: {
    title: "Ushna Fatima | Frontend Developer",

    description:
      "Building premium, modern and responsive websites using Next.js, React and Tailwind CSS.",

    url: "https://YOUR-VERCEL-DOMAIN.vercel.app",

    siteName: "Ushna Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ushna Fatima Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ushna Fatima | Frontend Developer",

    description:
      "Building premium, modern and responsive websites.",

    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#09090F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html lang="en" className={`${inter.variable} h-full antialiased`} data-scroll-behavior="smooth" suppressHydrationWarning>
    <body className="min-h-full flex flex-col bg-background text-text-primary selection:bg-primary/30">
     <StructuredData />
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
         <PWARegister />
        <Navbar />
        {children}
        
        <Footer />
      </ThemeProvider>
      <Analytics />
    </body>
    <GoogleAnalytics gaId="G-JJ7QKKN0FN" />
  </html>
);
}
