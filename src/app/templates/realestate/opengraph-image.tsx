import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Real Estate Template - Landing Page Templates";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ width: "60px", height: "2px", backgroundColor: "#c9a96e", marginBottom: "32px" }} />
        <div style={{ fontSize: "18px", color: "#c9a96e", marginBottom: "16px", fontWeight: 500, letterSpacing: "4px" }}>
          REAL ESTATE
        </div>
        <div style={{ fontSize: "52px", fontWeight: 300, color: "#2d2d2d", fontFamily: "serif" }}>
          Luxury Modern Minimal Template
        </div>
        <div style={{ fontSize: "22px", color: "#4a4a4a", opacity: 0.6, marginTop: "16px" }}>
          Landing Page Templates — MOVA Tech
        </div>
        <div style={{ width: "60px", height: "2px", backgroundColor: "#c9a96e", marginTop: "32px" }} />
      </div>
    ),
    { ...size }
  );
}
