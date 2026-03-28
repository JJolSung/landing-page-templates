import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Restaurant Template - Landing Page Templates";
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
          backgroundColor: "#fef7ed",
          border: "16px solid transparent",
          borderImage: "linear-gradient(135deg, #c8a55a, #1a3a2a, #c8a55a) 1",
        }}
      >
        <div style={{ fontSize: "18px", color: "#c8a55a", marginBottom: "16px", fontWeight: 600, letterSpacing: "4px" }}>
          RESTAURANT & CAFÉ
        </div>
        <div style={{ fontSize: "52px", fontWeight: 400, color: "#1a3a2a", fontFamily: "serif", fontStyle: "italic" }}>
          Warm Luxury Dining Template
        </div>
        <div style={{ fontSize: "22px", color: "#1a3a2a", opacity: 0.5, marginTop: "12px" }}>
          Landing Page Templates — MOVA Tech
        </div>
      </div>
    ),
    { ...size }
  );
}
