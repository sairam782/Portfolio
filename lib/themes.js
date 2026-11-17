// Colour themes. Each theme is one "light": four saturated stops for glows and
// drawings, four brighter stops for gradient text, and an accent for links.
// The default and the on-page picker are set in lib/site.js.

export const themes = [
  {
    id: "ocean",
    name: "Ocean",
    stops: ["#2563ff", "#0ea5e9", "#22d3ee", "#a5f3fc"],
    text: ["#7fb2ff", "#6fd0ff", "#7ee8f4", "#d4fbff"],
    accent: "#6fd0ff",
    accentSoft: "#b6e6ff",
  },
  {
    id: "ember",
    name: "Ember",
    stops: ["#ff3d2e", "#ff6a1a", "#ff9f1a", "#ffd27a"],
    text: ["#ff8a73", "#ffa35c", "#ffc15c", "#ffe2a8"],
    accent: "#ffa35c",
    accentSoft: "#ffd0a6",
  },
  {
    id: "mint",
    name: "Mint",
    stops: ["#0f9d8a", "#10b981", "#5eead4", "#d9f99d"],
    text: ["#5fd6c4", "#6ee7b7", "#99f6e4", "#e3fbb8"],
    accent: "#6ee7b7",
    accentSoft: "#b9f5da",
  },
  {
    id: "gold",
    name: "Gold",
    stops: ["#b7791f", "#e0a93b", "#f5cf7a", "#fff1c9"],
    text: ["#e6bd6a", "#f2cf85", "#f9e2ae", "#fff6dc"],
    accent: "#f2cf85",
    accentSoft: "#f9e6b8",
  },
  {
    id: "silver",
    name: "Silver",
    stops: ["#6b7686", "#9aa7b8", "#cfd8e3", "#ffffff"],
    text: ["#b4c0cf", "#d3dce7", "#eef2f7", "#ffffff"],
    accent: "#d3dce7",
    accentSoft: "#ffffff",
  },
  {
    id: "aurora",
    name: "Aurora",
    stops: ["#3d80ff", "#9461ff", "#ff5ca8", "#ffa852"],
    text: ["#7db0ff", "#a98bff", "#ff7fbb", "#ffb876"],
    accent: "#a98bff",
    accentSoft: "#b9a4ff",
  },
];

export const themeIds = themes.map((theme) => theme.id);
export const getTheme = (id) => themes.find((theme) => theme.id === id) ?? themes[0];

const rgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(", ");

function vars(theme) {
  const [c1, c2, c3, c4] = theme.stops;
  const [l1, l2, l3, l4] = theme.text;
  return [
    `--c1:${c1}`, `--c2:${c2}`, `--c3:${c3}`, `--c4:${c4}`,
    `--c1-rgb:${rgb(c1)}`, `--c2-rgb:${rgb(c2)}`, `--c3-rgb:${rgb(c3)}`,
    `--l1:${l1}`, `--l2:${l2}`, `--l3:${l3}`, `--l4:${l4}`,
    `--accent:${theme.accent}`, `--accent-rgb:${rgb(theme.accent)}`, `--accent-soft:${theme.accentSoft}`,
  ].join(";");
}

// The stylesheet that defines every theme. The default also applies with no attribute set.
export function themeCss(defaultId) {
  const fallback = getTheme(defaultId);
  return [`:root{${vars(fallback)}}`, ...themes.map((theme) => `[data-theme="${theme.id}"]{${vars(theme)}}`)].join("");
}
