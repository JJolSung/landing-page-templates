import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Online Course Template - Landing Page Templates";
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
          backgroundColor: "#fefce8",
        }}
      >
        <div style={{ width: "60px", height: "60px", borderRadius: "16px", backgroundColor: "#312e8120", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", marginBottom: "24px" }}>
          🎓
        </div>
        <div style={{ fontSize: "18px", color: "#f59e0b", marginBottom: "16px", fontWeight: 600, letterSpacing: "3px" }}>
          ONLINE COURSE
        </div>
        <div style={{ fontSize: "52px", fontWeight: 600, color: "#312e81" }}>
          Warm Educational Template
        </div>
        <div style={{ fontSize: "22px", color: "#312e81", opacity: 0.5, marginTop: "12px" }}>
          Landing Page Templates — MOVA Tech
        </div>
      </div>
    ),
    { ...size }
  );
}
