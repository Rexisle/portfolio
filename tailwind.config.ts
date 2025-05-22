import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true,
  },
  extend: {
    keyframes: {
      flicker: {
        "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
        "20%, 24%, 55%": { opacity: "0.4" },
      },
    },
    animation: {
      flicker: "flicker 2s infinite",
    },
  },
  
  
};

export default config;
