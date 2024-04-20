import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {

        "accent": "#05bdba",
        // "accent-2": "#05bdba",
        // "accent": "#3b82f6",

      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
