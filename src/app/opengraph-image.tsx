import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { siteConfig } from "@/content/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await readFile(path.join(process.cwd(), "public/images/ayush-og.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ffffff",
          color: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left: text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 56px 56px 72px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 22, letterSpacing: 3, textTransform: "uppercase", color: "#0a0a0a" }}>
              {siteConfig.name}
            </div>
            <div style={{ fontSize: 18, letterSpacing: 2, textTransform: "uppercase", color: "#6b6b6b" }}>
              {siteConfig.role}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ fontSize: 50, fontWeight: 500, lineHeight: 1.12, letterSpacing: -1.5, maxWidth: 680 }}>
              {siteConfig.headline}
            </div>
            <div style={{ fontSize: 21, lineHeight: 1.45, color: "#525252", maxWidth: 660 }}>{siteConfig.intro}</div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, color: "#6b6b6b" }}>
            <div>Flutter · Kotlin · Java · Native Android</div>
            <div>{siteConfig.location}</div>
          </div>
        </div>

        {/* Right: photo */}
        <div
          style={{
            width: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f6f6f6",
            borderLeft: "1px solid #e4e4e4",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            width={300}
            height={300}
            style={{ width: 300, height: 300, borderRadius: 9999, objectFit: "cover", border: "2px solid #e4e4e4" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
