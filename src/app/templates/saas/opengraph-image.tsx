import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SaaS Product Template - Landing Page Templates";
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
          backgroundColor: "#09090b",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.3), transparent)",
          }}
        />
        <div style={{ fontSize: "18px", color: "#8b5cf6", marginBottom: "16px", fontWeight: 600, letterSpacing: "2px" }}>
          SAAS PRODUCT
        </div>
        <div style={{ fontSize: "52px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
          Modern Dark Tech Template
        </div>
        <div style={{ fontSize: "22px", color: "#71717a" }}>
          Landing Page Templates — MOVA Tech
        </div>
      </div>
    ),
    { ...size }
  );
}
