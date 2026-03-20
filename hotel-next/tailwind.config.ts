import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        memo: {
          bg: {
            start: "#04060a",
            mid: "#05080d",
            end: "#07101a",
          },
          text: "#f4f7fb",
          "text-soft": "rgba(247, 250, 255, 0.88)",
          cyan: "#1fe1ff",
          "cyan-soft": "#7de6ff",
          "cyan-pale": "#dfeeff",
          amber: "#ff7a1a",
          "amber-soft": "#ff8a2e",
          orange: "#ff6a00",
          stroke: "rgba(42, 61, 79, 0.95)",
          "stroke-warm": "rgba(106, 61, 31, 0.68)",
          "stroke-cool": "rgba(41, 70, 93, 0.92)",
          line: "rgba(27, 40, 54, 0.2)",
          dot: "rgba(21, 37, 53, 1)",
        },
      },
      borderRadius: {
        shell: "38px",
        card: "26px",
      },
      boxShadow: {
        memo: "0 34px 88px rgba(0, 0, 0, 0.44)",
        "memo-elev": "0 28px 90px rgba(0, 0, 0, 0.42)",
        card: "0 22px 56px rgba(0, 0, 0, 0.24)",
        "card-hover": "0 26px 70px rgba(0, 0, 0, 0.32)",
      },
      maxWidth: {
        page: "1680px",
        "hotel-section": "1480px",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Avenir Next", "Helvetica Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
