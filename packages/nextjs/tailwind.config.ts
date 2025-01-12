import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#794BFC",
          secondary: "#f36a3d",
          accent: "#ff00ff",
          neutral: "#ff00ff",
          "base-100": "#ffffff",
          info: "#0000ff",
          success: "#00ffff",
          warning: "#00ff00",
          error: "#ff0000",
        },
      },
      {
        light: {
          primary: "#f36a3d",
          "primary-content": "#2A3655",
          secondary: "#8B45FD",
          "secondary-content": "#7800FF",
          accent: "#f36a3d",
          "accent-content": "#212638",
          neutral: "#212638",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          info: "#f36a3d",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",
        },
      },
      {
        dark: {
          primary: "#212638",
          "primary-content": "#DAE8FF",
          secondary: "#8b45fd",
          "secondary-content": "#0FF",
          accent: "#4969A6",
          "accent-content": "#F9FBFF",
          neutral: "#F9FBFF",
          "neutral-content": "#385183",
          "base-100": "#1C223B",
          info: "#385183",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        "custom-orange": "#f36a3d",
      },
      backgroundImage: {
        "gradient-light":
          "linear-gradient(270deg, #A7ECFF -17.42%, #E8B6FF 109.05%)",
        "gradient-dark":
          "linear-gradient(90deg, #42D2F1 0%, #B248DD 100%)",
        "gradient-vertical":
          "linear-gradient(180deg, #3457D1 0%, #8A45FC 100%)",
      },
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;