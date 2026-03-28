import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mobile App Template - Landing Page Templates";
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
          backgroundColor: "#0f172a",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.3), rgba(168,85,247,0.1), transparent)",
          }}
        />
        <div style={{ fontSize: "18px", background: "linear-gradient(90deg, #6366f1, #a855f7)", backgroundClip: "text", color: "transparent", marginBottom: "16px", fontWeight: 700, letterSpacing: "3px" }}>
          MOBILE APP
        </div>
        <div style={{ fontSize: "52px", fontWeight: 700, color: "#ffffff" }}>
          Fresh Startup Gradient Template
        </div>
        <div style={{ fontSize: "22px", color: "#64748b", marginTop: "12px" }}>
          Landing Page Templates — MOVA Tech
        </div>
      </div>
    ),
    { ...size }
  );
}
