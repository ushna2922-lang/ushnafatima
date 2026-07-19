import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import PWARegister from "@/components/pwa-register";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});
export const viewport: Viewport = {
  themeColor: "#09090F",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ushnafatima.vercel.app"),

  title: "Ushna Fatima | Frontend Web Developer",

  description:
    "I build premium, fast, and responsive websites.",

  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/branding/favicon-32x32.png", type: "image/png" },
    ],

    apple: "/branding/apple-icon.png",
  },

  appleWebApp: {
    capable: true,
    title: "Ushna",
    statusBarStyle: "black-translucent",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
  <html lang="en" className={`${inter.variable} h-full antialiased`} data-scroll-behavior="smooth" suppressHydrationWarning>
    <body className="min-h-full flex flex-col bg-background text-text-primary selection:bg-primary/30">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
         <PWARegister />
        <Navbar />
        {children}
        
        <Footer />
      </ThemeProvider>
    </body>
  </html>
);
}
