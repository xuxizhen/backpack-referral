import { ImageResponse } from "next/og";
export const alt =
  "FeeLens — Know your trading costs. Independent guides by Mike Xu.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f6f8fc",
          color: "#172c48",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 76,
        }}
      >
        <div style={{ display: "flex", fontSize: 38, color: "#315ce7" }}>
          FeeLens
        </div>
        <div style={{ fontSize: 82, maxWidth: 960, display: "flex" }}>
          Compare exchanges. Know your costs.
        </div>
        <div style={{ fontSize: 26, display: "flex" }}>
          Backpack · OKX · Binance | FeeLens by Mike Xu
        </div>
      </div>
    ),
    size,
  );
}
