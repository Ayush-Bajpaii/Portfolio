import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#ffffff",
          color: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 10,
              border: "1px solid #e4e4e4",
              background: "#f6f6f6",
              color: "#0a0a0a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            {siteConfig.shortName}
          </div>
          <div style={{ fontSize: 24, color: "#525252" }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 18, letterSpacing: 4, color: "#0a0a0a", textTransform: "uppercase" }}>
            {siteConfig.eyebrow}
          </div>
          <div style={{ fontSize: 60, fontWeight: 600, lineHeight: 1.1, letterSpacing: -2, maxWidth: 1000 }}>
            {siteConfig.headline}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#525252" }}>
          <div>Flutter · Kotlin · Java · Native Android</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#6b6b6b" }} />
            {siteConfig.location}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
