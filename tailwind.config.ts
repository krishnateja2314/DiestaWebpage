import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1D",
        secondry: "#3B1C32",
        tertiary: "#6A1E55",
        quaternary: "#A64D79",
      },
    },
  },
  plugins: [],
} satisfies Config;

  
  