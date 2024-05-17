import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/home/heroimage.svg')",
      },
      fontFamily: {
        chillax: ['var(--font-chillax)'],
        forum: ['var(--font-forum)'],
        licorice: ['var(--font-licorice)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        pink: '#FAA4A4',
      },
      boxShadow: {
        'hero-overlay': 'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
export default config;
