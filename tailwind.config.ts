import type { Config } from "tailwindcss";
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-blue-gradient': 'radial-gradient(circle at center, #020617 0%, #1e40af 100%)'
      },
    },
  },
  plugins: [
    function({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".h1": {
          "@apply uppercase font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide": {},
          variants: ['responsive', 'hover'],
        },
        ".h2": {
          "@apply font-semibold text-2xl md:text-3xl lg:text-4xl": {},
          variants: ['responsive', 'hover'],
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
          variants: ['responsive', 'hover'],
        },
        ".p": {
          "@apply text-slate-300":{},
          variants: ['responsive', 'hover'],
        },
        ".p-sm": {
          "@apply text-sm text-slate-300":{},
          variants: ['responsive', 'hover'],
        },
        ".p-xs": {
          "@apply text-xs text-slate-600 font-semibold":{},
          variants: ['responsive', 'hover'],
        },
        '.text-slogan': {
          '@apply text-lime-300 uppercase font-semibold text-sm tracking-wider': {},
          variants: ['responsive', 'hover'],
        },
        ".flex-center": {
          '@apply flex items-center justify-center': {},
          variants: ['responsive', 'hover'],
        }
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
