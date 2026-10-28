import type { Metadata, Viewport } from "next";
import { Roboto, Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import { COMPANY } from "@/lib/constants";

const sans = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const display = Barlow({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = COMPANY.website;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Greenics Enterprises Pvt Ltd | Waste Management, Logistics, Trading & Cybersecurity",
    template: "%s | Greenics Enterprises Pvt Ltd",
  },
  description:
    "Greenics Enterprises Pvt Ltd provides integrated waste management, logistics, trading and cybersecurity solutions focused on sustainability, reliability and business growth.",
  keywords: [
    "Greenics Enterprises",
    "waste management",
    "Swachh Bharat",
    "logistics India",
    "pan-India transport",
    "import export trading",
    "cybersecurity solutions",
    "B2B services India",
    "sustainability",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  applicationName: COMPANY.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/greenics-icon.png", type: "image/png" },
    ],
    shortcut: "/images/greenics-icon.png",
    apple: "/images/greenics-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: COMPANY.name,
    title:
      "Greenics Enterprises Pvt Ltd | Waste Management, Logistics, Trading & Cybersecurity",
    description:
      "Integrated services in Waste Management, Logistics, Trading & Cybersecurity for a sustainable future.",
    images: [
      {
        url: "/images/hero-city.webp",
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Greenics Enterprises Pvt Ltd | Waste Management, Logistics, Trading & Cybersecurity",
    description:
      "Integrated services in Waste Management, Logistics, Trading & Cybersecurity for a sustainable future.",
    images: ["/images/hero-city.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#03111F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} flex min-h-screen flex-col bg-background antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
