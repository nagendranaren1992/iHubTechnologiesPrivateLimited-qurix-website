import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qurix Blog | Healthcare Operations & HMS Best Practices",
  description:
    "Expert insights on hospital management, EMR, revenue cycle, digital health, and patient care from the Qurix healthcare platform team.",
  alternates: {
    canonical: "https://qurix.com/blog",
  },
  openGraph: {
    title: "Qurix Blog | Healthcare Operations & HMS Best Practices",
    description:
      "Expert insights on hospital management, EMR, revenue cycle, digital health, and patient care from the Qurix healthcare platform team.",
    url: "https://qurix.com/blog",
    siteName: "Qurix",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qurix Blog | Healthcare Operations & HMS Best Practices",
    description:
      "Expert insights on hospital management, EMR, revenue cycle, digital health, and patient care from the Qurix healthcare platform team.",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
