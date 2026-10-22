import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "FeeLens — Independent trading fee guides",
  description: "Independent exchange guides and fee tools by Mike Xu.",
  icons: { icon: "/icon.svg" },
  verification: {
    other: {
      "baidu-site-verification": "codeva-msybyesEtM",
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
