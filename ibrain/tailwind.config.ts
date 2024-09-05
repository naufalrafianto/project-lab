import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/bg-1.png')",
      },
      colors: {
        primary: "#0078C0",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
