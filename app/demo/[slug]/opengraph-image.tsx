import { ImageResponse } from "next/og";
import { getTemplateBySlug } from "@/data/templates";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

interface OgImageProps {
  params: Promise<{ slug: string }>;
}

export default async function OpenGraphImage({ params }: OgImageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  const title = template?.heroTitle ?? "High-Converting Local Business Templates";
  const niche = template?.niche ?? "Template Showcase";
  const city = template?.city ?? "Built for local business growth";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "radial-gradient(circle at 14% 18%, rgba(42, 130, 232, 0.28), transparent 36%), radial-gradient(circle at 88% 4%, rgba(36, 196, 164, 0.25), transparent 24%), linear-gradient(145deg, #f4f8ff 0%, #e7f0fb 48%, #f4f8ff 100%)",
          color: "#10223b",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            borderRadius: 999,
            border: "1px solid rgba(16, 34, 59, 0.2)",
            padding: "10px 18px",
            fontSize: 24,
            fontWeight: 600,
            color: "#0f4c95",
            alignSelf: "flex-start",
            background: "rgba(255,255,255,0.8)",
          }}
        >
          {niche} Demo Template
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.03em", maxWidth: "1000px" }}>
            {title}
          </div>
          <div style={{ fontSize: 32, color: "#2f455e" }}>{city}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#0f4c95" }}>Template Showcase</div>
          <div
            style={{
              fontSize: 22,
              borderRadius: 999,
              background: "#1f7ae0",
              color: "#ffffff",
              padding: "10px 18px",
              fontWeight: 600,
            }}
          >
            Use This Template
          </div>
        </div>
      </div>
    ),
    size,
  );
}
