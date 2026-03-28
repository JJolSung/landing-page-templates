import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Medical Clinic Template - Landing Page Templates";
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
          backgroundColor: "#f0fdfa",
        }}
      >
        <div style={{ width: "60px", height: "60px", borderRadius: "16px", backgroundColor: "#0d948820", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", marginBottom: "24px" }}>
          🏥
        </div>
        <div style={{ fontSize: "18px", color: "#0d9488", marginBottom: "16px", fontWeight: 600, letterSpacing: "3px" }}>
          MEDICAL CLINIC
        </div>
        <div style={{ fontSize: "52px", fontWeight: 600, color: "#134e4a" }}>
          Clean Clinical Trust Template
        </div>
        <div style={{ fontSize: "22px", color: "#0d9488", opacity: 0.6, marginTop: "12px" }}>
          Landing Page Templates — MOVA Tech
        </div>
      </div>
    ),
    { ...size }
  );
}
