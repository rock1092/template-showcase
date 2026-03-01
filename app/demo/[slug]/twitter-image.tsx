import { ImageResponse } from "next/og";
import { getTemplateBySlug } from "@/data/templates";

export const size = {
  width: 1200,
  height: 675,
};

export const contentType = "image/png";

interface TwitterImageProps {
  params: Promise<{ slug: string }>;
}

export default async function TwitterImage({ params }: TwitterImageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  const niche = template?.niche ?? "Template";
  const subtitle = template?.seo.description ?? "High-converting local business templates.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(145deg, #0f4c95 0%, #1f7ae0 48%, #22b39a 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, fontWeight: 700, opacity: 0.95 }}>Template Showcase</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "1040px" }}>
          <div style={{ fontSize: 64, lineHeight: 1.1, fontWeight: 800, letterSpacing: "-0.02em" }}>{niche} Demo</div>
          <div style={{ fontSize: 34, lineHeight: 1.25, opacity: 0.96 }}>{subtitle}</div>
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            borderRadius: 999,
            padding: "10px 16px",
            background: "rgba(255, 255, 255, 0.18)",
            alignSelf: "flex-start",
          }}
        >
          Premium niche-ready framework
        </div>
      </div>
    ),
    size,
  );
}
