import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fitness Template - Landing Page Templates";
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
          backgroundColor: "#000000",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "20%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(57,255,20,0.2), transparent)",
          }}
        />
        <div style={{ fontSize: "20px", color: "#39ff14", marginBottom: "16px", fontWeight: 800, letterSpacing: "6px" }}>
          FITNESS & GYM
        </div>
        <div style={{ fontSize: "56px", fontWeight: 800, color: "#ffffff", textTransform: "uppercase" as const }}>
          Bold Sports Energy
        </div>
        <div style={{ fontSize: "22px", color: "#555555", marginTop: "12px" }}>
          Landing Page Templates — MOVA Tech
        </div>
      </div>
    ),
    { ...size }
  );
}
