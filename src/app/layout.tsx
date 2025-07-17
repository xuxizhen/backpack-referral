import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Backpack Exchange - Register & Trade Crypto with 10% Referral Bonus",
  description: "Join Backpack crypto exchange and get exclusive newbie rewards plus up to 10% referral commission. Trade meme coins, access Chinese support, and join gaming communities. Register now for zero fees!",
  keywords: "Backpack exchange, crypto trading, meme coins, referral bonus, cryptocurrency, Bitcoin, Ethereum, trading platform, crypto exchange, blockchain",
  authors: [{ name: "Backpack Exchange" }],
  robots: "index, follow",
  openGraph: {
    title: "Backpack Exchange - Register & Trade Crypto with 10% Referral Bonus",
    description: "Join Backpack crypto exchange and get exclusive newbie rewards plus up to 10% referral commission. Trade meme coins, access Chinese support, and join gaming communities.",
    url: "https://backpack-referral.vercel.app/",
    siteName: "Backpack Exchange Referral",
    images: [
      {
        url: "https://backpack-referral.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Backpack Exchange Referral"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Backpack Exchange - Register & Trade Crypto with 10% Referral Bonus",
    description: "Join Backpack crypto exchange and get exclusive newbie rewards plus up to 10% referral commission.",
    images: ["https://backpack-referral.vercel.app/og-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://cdn.prod.website-files.com/66830ad123bea7f626bcf58f/670f68cdb73b3a75c01956b9_Group%20427324273.svg" />
        <link rel="apple-touch-icon" href="https://cdn.prod.website-files.com/66830ad123bea7f626bcf58f/670f68cdb73b3a75c01956b9_Group%20427324273.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CE9L7SLBFL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CE9L7SLBFL');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
