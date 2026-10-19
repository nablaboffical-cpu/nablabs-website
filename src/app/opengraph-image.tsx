import { ImageResponse } from "next/og";

export const alt = "NabLabs, your business growth lab";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #10091B 0%, #21152F 100%)",
          color: "#F8F7FC",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="96" height="96" viewBox="0 0 40 40" fill="none">
            <path d="M9 31V9L31 31V9" stroke="#C4B5FD" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="9" cy="9" r="4" fill="#10091B" stroke="#C4B5FD" strokeWidth="2.4" />
            <circle cx="31" cy="31" r="4" fill="#10091B" stroke="#C4B5FD" strokeWidth="2.4" />
            <circle cx="9" cy="31" r="2.6" fill="#8B5CF6" />
            <circle cx="31" cy="9" r="2.6" fill="#C4B5FD" />
          </svg>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
            Nab<span style={{ color: "#C4B5FD" }}>Labs</span>
          </div>
        </div>
        <div style={{ marginTop: 56, fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 940 }}>
          Turn Business Bottlenecks Into Growth.
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: "#B3A9C9" }}>
          AI Solutions & Full-Stack Web Development
        </div>
      </div>
    ),
    size,
  );
}
