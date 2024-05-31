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
      background: {
        'nav-bg':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(0deg, rgba(250, 164, 164, 0.1), rgba(250, 164, 164, 0.1))',
        'body-bg':
          'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, rgba(250, 164, 164, 0.2), rgba(250, 164, 164, 0.2))',
      },
      fontFamily: {
        chillax: ['var(--font-chillax)'],
        forum: ['var(--font-forum)'],
        licorice: ['var(--font-licorice)'],
        poppins: ['var(--font-poppins)'],
        suisseintl: ['var(--font-suisseintl)'],
      },
      colors: {
        pink: '#FAA4A4',
        bodybg: 'rgba(250, 164, 164, 0.2)',
        navbg: 'rgba(250, 164, 164, 0.1)',
        disabledGrey: '#D0D0DB',
      },
      boxShadow: {
        'hero-overlay': 'inset 0 0 0 2000px rgba(0, 0, 0, 0.4)',
        'nav-shadow': '0px 1px 0px 0px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
export default config;
