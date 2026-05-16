import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dae6ff",
          200: "#bcd3ff",
          300: "#8eb6ff",
          400: "#598eff",
          500: "#3366ff",
          600: "#1f47e6",
          700: "#1936b8",
          800: "#172f93",
          900: "#172d75",
          950: "#0f1a47",
        },
        accent: {
          50: "#effefb",
          100: "#c8fdf3",
          200: "#92f9e8",
          300: "#54eed8",
          400: "#22d6c1",
          500: "#0ab8a6",
          600: "#079387",
          700: "#0a756d",
          800: "#0e5d58",
          900: "#114d49",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(23, 45, 117, 0.15)",
        glow: "0 0 0 1px rgba(51, 102, 255, 0.08), 0 20px 60px -20px rgba(51, 102, 255, 0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
