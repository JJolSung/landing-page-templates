import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Landing Page Templates - MOVA Tech";
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
          backgroundColor: "#fafaf9",
        }}
      >
        {/* Color strip representing 4 templates */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          {[
            { bg: "#09090b", accent: "#8b5cf6", label: "SaaS" },
            { bg: "#fef7ed", accent: "#c8a55a", label: "Restaurant" },
            { bg: "#000000", accent: "#39ff14", label: "Fitness" },
            { bg: "#ffffff", accent: "#c9a96e", label: "Real Estate" },
          ].map((t) => (
            <div
              key={t.label}
              style={{
                width: "120px",
                height: "80px",
                backgroundColor: t.bg,
                borderRadius: "12px",
                border: `3px solid ${t.accent}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: t.accent,
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {t.label}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#1c1917",
            marginBottom: "16px",
            fontFamily: "serif",
          }}
        >
          Landing Page Templates
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#78716c",
          }}
        >
          Professionally crafted, delivered in 48 hours
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "#a8a29e",
            marginTop: "32px",
          }}
        >
          Built by MyeongSub Kim / MOVA Tech
        </div>
      </div>
    ),
    { ...size }
  );
}
