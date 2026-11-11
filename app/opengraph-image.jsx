import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/lib/site";

// The card shown when the site is shared on LinkedIn, Slack, and similar.
export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const font = await readFile(join(process.cwd(), "app/fonts/Geist-600.woff"));

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#000000", color: "#f5f5f7", fontFamily: "Geist", position: "relative" }}>
        <div style={{ position: "absolute", left: -100, right: -100, bottom: -360, height: 620, display: "flex", borderRadius: "50%", background: "linear-gradient(90deg, #3d80ff, #9461ff 45%, #ff5ca8 75%, #ffa852)", filter: "blur(90px)", opacity: 0.75 }} />
        <div style={{ display: "flex", alignItems: "center", fontSize: 30, color: "#d4d4d8" }}>
          <div style={{ width: 28, height: 28, borderRadius: 14, marginRight: 16, background: "linear-gradient(45deg, #3d80ff, #9461ff 45%, #ff5ca8 75%, #ffa852)" }} />
          {profile.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 124, lineHeight: 0.98, letterSpacing: -6 }}>Machine learning</div>
          <div style={{ fontSize: 124, lineHeight: 1.1, letterSpacing: -6, color: "#c4b5fd" }}>that ships.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#f5f5f7" }}>
          <div>{profile.role}</div>
          <div>Open to roles from May 2027</div>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Geist", data: font, weight: 600, style: "normal" }] }
  );
}
