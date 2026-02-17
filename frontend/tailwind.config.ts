import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'stacks-orange': '#F2A900',
        'terminal-black': '#0B0B0C',
        'terminal-gray': '#1A1A1A',
        'terminal-text': '#EDEDED',
      },
      fontFamily: {
        mono: ["'Courier New'", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
