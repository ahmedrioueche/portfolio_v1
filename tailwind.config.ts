import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        red: {
          500: "#E63946",
          400: "#8E44AD",
        },
        primary: "#A055C8",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      fontFamily: {
        satisfy: ["Satisfy", "serif"],
        stix: ["STIX Two Text", "serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

export default config;
