import type { Metadata } from "next";
import "./globals.css";
import Analytics, { GA4Script, MetaPixelScript } from "./components/Analytics";

export const metadata: Metadata = {
  title: "fund-stream - Find the right financing for your business",
  description: "We connect your business financing request with qualified financial partners (banks, fintechs, brokers). Free, fast, no obligation.",
  keywords: "business loan, financing, SME financing, business funding, state privacy rights",
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GA4Script />
        <MetaPixelScript />
      </head>
      <body className="antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
