import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://template-showcase.netlify.app";
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Template Showcase | High-Converting Local Business Templates",
    template: "%s | Template Showcase",
  },
  description:
    "Premium local business website templates built for conversion, SEO, and fast launch across service niches.",
  applicationName: "Template Showcase",
  keywords: [
    "local business templates",
    "SEO website templates",
    "high-converting templates",
    "service business websites",
    "Next.js template showcase",
  ],
  openGraph: {
    type: "website",
    title: "Template Showcase | High-Converting Local Business Templates",
    description:
      "Explore premium local business demos for real estate, construction, HVAC, painting, plumbing, and more.",
    url: siteUrl,
    siteName: "Template Showcase",
  },
  twitter: {
    card: "summary_large_image",
    title: "Template Showcase | High-Converting Local Business Templates",
    description:
      "Premium local business templates with one elite visual framework and niche-ready conversion sections.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
      {gaId ? <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" /> : null}
      {gaId ? (
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', '${gaId}');`}
        </Script>
      ) : null}
    </html>
  );
}
