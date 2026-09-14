import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Gbedeka Farms | Healthy Food. Stronger Communities.",
    template: "%s | Gbedeka Farms",
  },
  description: site.description,
  applicationName: site.name,
  keywords: ["Gbedeka Farms", "Ghana agriculture", "maize", "poultry", "pig farming", "sustainable agriculture"],
  openGraph: {
    title: "Gbedeka Farms | Healthy Food. Stronger Communities.",
    description: site.description,
    type: "website",
    siteName: site.name,
    images: ["/images/hero-farm.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gbedeka Farms",
    description: site.description,
    images: ["/images/hero-farm.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
