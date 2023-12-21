// tailwind.config.js
import { nextui } from "@nextui-org/react";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tussock: "#B9934A",
        armadillo: "#3A362D",
        "well-read": "#B53032",
        buccaneer: "#702D2C",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
