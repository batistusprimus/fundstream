import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fund-stream - Find the right financing for your business",
  description: "We connect your business financing request with qualified financial partners (banks, fintechs, brokers). Free, fast, no obligation.",
  keywords: "business loan, financing, SME financing, business funding, CCPA compliant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
