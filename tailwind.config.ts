import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B3A8A",
          dark: "#122870",
          light: "#2A4FA0",
        },
        crimson: {
          DEFAULT: "#CC1F1A",
          dark: "#A81915",
          light: "#E02B26",
        },
        skyblue: {
          DEFAULT: "#7DBCEA",
          light: "#B8D9F4",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
