/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1400px",
      },
<<<<<<< Updated upstream
      fontFamily:{
        sans:["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        primary:["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono:["JetBrains Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
  
    extend: {
      colors:{
        primary: "#030308",
        surface: "#080912",
        muted: "#10121d",
        accent:{
          DEFAULT:"#00f0ff",
          hover:"#6ff7ff",
        },
        violetGlow: "#bc13fe",
        cyanSoft: "#00f0ff",
=======
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
      display: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "#05050a",
          soft: "#0b0b14",
          card: "#0f0f1a",
        },
        line: "rgba(255,255,255,0.08)",
        accent: {
          DEFAULT: "#a78bfa",
          hover: "#c4b5fd",
          cyan: "#22d3ee",
          pink: "#f472b6",
        },
        primary: "#05050a",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(5,5,10,1) 90%), radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        "accent-gradient":
          "linear-gradient(135deg, #a78bfa 0%, #22d3ee 50%, #f472b6 100%)",
        "glow-radial":
          "radial-gradient(600px circle at 30% 20%, rgba(167,139,250,0.15), transparent 40%), radial-gradient(600px circle at 80% 60%, rgba(34,211,238,0.12), transparent 40%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(167,139,250,0.5)",
        "glow-cyan": "0 0 40px -10px rgba(34,211,238,0.5)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.06)",
>>>>>>> Stashed changes
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-slow": {
          "0%,100%": { opacity: 0.35 },
          "50%": { opacity: 0.7 },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 3s linear infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
<<<<<<< Updated upstream
}
=======
};
>>>>>>> Stashed changes
