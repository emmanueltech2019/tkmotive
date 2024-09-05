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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'slide-in-right-smooth': {
          '0%, 100%': { transform: 'translateX(-150%)' },
          '50%': { transform: 'translateX(0)' },
        },
        'slide-in-left-smooth': {
          '0%, 100%': { transform: 'translateX(150%)' },
          '50%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in-right-smooth': 'slide-in-right-smooth 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
        'slide-in-left-smooth': 'slide-in-left-smooth 2s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),3333
  ],
};
export default config;
