import { ImageResponse } from "next/og";

export const alt = "Armando Cardona Lara — Desarrollador web y de software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "72px",
          background: "#222831",
          color: "#EEEEEE",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 20,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#DFD0B8",
          }}
        >
          <span>Armando Cardona Lara</span>
          <span>Portafolio / 2026</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              maxWidth: 1000,
              fontSize: 86,
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: "-0.05em",
            }}
          >
            Productos digitales, construidos con intención.
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#948979" }}>
            Desarrollador web y de software
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 2,
            background: "#DFD0B8",
          }}
        />
      </div>
    ),
    size,
  );
}
