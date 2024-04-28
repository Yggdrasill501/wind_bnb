import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        colors:{
            'wind-green': '#DAF7A6',
            'wind-yellow': '#FFC300',
            'wind-orange': '#FF5733',
            'wind-red': '#C70039',
            'wind-purple': '#900C3F',
            'wind-dark': '#581845',
        },
    },
  },
  plugins: [],
};
export default config;
