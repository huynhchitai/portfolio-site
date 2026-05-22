import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ["var(--font-grotesk)", "Helvetica Neue", "sans-serif"],
        display: ["var(--font-grotesk)", "Helvetica Neue", "sans-serif"],
        mono:    ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        bg:      { DEFAULT: "#FAFAFA", subtle: "#F4F4F4" },
        surface: "#FFFFFF",
        border:  { DEFAULT: "#E4E4E4", strong: "#C8C8C8" },
        ink: {
          DEFAULT: "#0E0E0E",
          2:       "#2A2A2A",
          3:       "#5A5A5A",
          4:       "#9A9A9A",
        },
        accent: {
          DEFAULT: "#0D6EFD",
          2:       "#0A58CA",
        },
      },
      fontSize: {
        "2xs":  ["0.625rem",  { lineHeight: "1rem" }],
        "3xs":  ["0.5625rem", { lineHeight: "0.875rem" }],
      },
      letterSpacing: {
        wide:       "0.05em",
        wider:      "0.1em",
        widest:     "0.18em",
        "ultra":    "0.28em",
      },
      animation: {
        "reveal-up":   "revealUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal-fade": "revealFade 0.6s ease forwards",
      },
      keyframes: {
        revealUp: {
          "0%":   { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        revealFade: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
