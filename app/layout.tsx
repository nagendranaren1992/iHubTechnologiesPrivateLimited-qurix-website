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
  title: "Qurix | Healthcare Operations & Patient Journey Platform",
  description: "Qurix is a unified healthcare operations platform that streamlines hospital workflows, patient engagement, clinical management, and billing.",
  keywords: ["Healthcare Operations", "Patient Journey", "Hospital Management", "Clinical Management", "Medical Billing"],
  openGraph: {
    title: "Qurix | Healthcare Operations & Patient Journey Platform",
    description: "Qurix is a unified healthcare operations platform that streamlines hospital workflows, patient engagement, clinical management, and billing.",
    url: "https://qurix.com",
    siteName: "Qurix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qurix | Healthcare Operations & Patient Journey Platform",
    description: "Qurix is a unified healthcare operations platform that streamlines hospital workflows, patient engagement, clinical management, and billing.",
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
