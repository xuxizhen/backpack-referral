import type { NextConfig } from "next";
const siteOrigin = new URL("https://www.feelens.net");
const legacyHosts = [
  "backpack-referral.vercel.app",
  "backpackref.com",
  "www.backpackref.com",
];
const config: NextConfig = {
  async redirects() {
    return [
      ...legacyHosts.map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: `${siteOrigin.origin}/:path*`,
        statusCode: 301,
      })),
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "feelens.net" }],
        destination: `${siteOrigin.origin}/:path*`,
        permanent: true,
      },
      { source: "/", destination: "/en", permanent: true },
      ...["zh-tw", "it", "de"].map((lang) => ({
        source: `/${lang}/:path*`,
        destination: `/${lang === "zh-tw" ? "zh-cn" : "en"}/:path*`,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com" +
              (process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : "") +
              "; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.google-analytics.com https://*.googletagmanager.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; font-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none';",
          },
        ],
      },
    ];
  },
};
export default config;
