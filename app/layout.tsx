import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niall.M | Senior Webmaster & E-Commerce Developer Portfolio",
  description:
    "Principal Frontend Engineer & Senior E-Commerce Architect specializing in Next.js headless storefronts, Shopify APIs, MedusaJS, custom checkout flows, and sub-second web performance.",
  keywords: [
    "E-Commerce Developer",
    "Senior Webmaster",
    "Headless Commerce",
    "Next.js App Router",
    "Shopify Storefront API",
    "Stripe Payments",
    "MedusaJS",
    "Conversion Rate Optimization",
    "Core Web Vitals",
  ],
  authors: [{ name: "Niall.M" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Niall.M | Senior E-Commerce Architect Portfolio",
    description:
      "Architecting scalable e-commerce platforms, high-conversion checkouts, and custom web solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#080b11] text-slate-100 antialiased min-h-screen selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
