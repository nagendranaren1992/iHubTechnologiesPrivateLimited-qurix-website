import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/**
 * NOTE: "Plus Jakarta Sans" is the mandated font for the entire application.
 * DO NOT change this font or its fallback in any part of the codebase.
 */

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hospital Management Software & Healthcare ERP | Qurix",
  description:
    "Qurix is a unified hospital management platform for EMR, billing, pharmacy, laboratory, inventory, patient engagement, and hospital operations.",
  keywords: [
    "Hospital Management Software",
    "Healthcare ERP",
    "EMR",
    "Hospital Billing",
    "Pharmacy Management",
    "Laboratory Information System",
    "Patient Engagement",
  ],
  metadataBase: new URL("https://qurix.com"),
  alternates: {
    canonical: "https://qurix.com",
  },
  openGraph: {
    title: "Hospital Management Software & Healthcare ERP | Qurix",
    description:
      "Qurix is a unified hospital management platform for EMR, billing, pharmacy, laboratory, inventory, patient engagement, and hospital operations.",
    url: "https://qurix.com",
    siteName: "Qurix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Management Software & Healthcare ERP | Qurix",
    description:
      "Qurix is a unified hospital management platform for EMR, billing, pharmacy, laboratory, inventory, patient engagement, and hospital operations.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
