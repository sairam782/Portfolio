import { profile } from "@/lib/site";

export default function manifest() {
  return {
    name: profile.name,
    short_name: profile.firstName,
    description: profile.summary,
    start_url: "/",
    display: "browser",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
