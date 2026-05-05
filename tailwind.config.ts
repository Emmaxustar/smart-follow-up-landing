import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#06111f",
        foreground: "#ebf4ff",
      },
      boxShadow: {
        glow: "0 20px 80px rgba(56, 189, 248, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
