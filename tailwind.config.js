import path from 'path';

const root = path.resolve(process.cwd());
const contents = ['./src/**/*.{ts,tsx,html}', './src/**/*.css']
const content = contents.map((item) => path.join(root, item));
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: content,
  plugins: [
    require('@tailwindcss/aspect-ratio'), //
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('@build/tailwind'),
  ],
  theme: {
    extend: {
      fontFamily: {
        mon: ['Montserrat', 'sans-serif'], // 定义自定义字体族
        rob: ['Roboto', 'sans-serif'],
        int: ['Inter', 'sans-serif'],
        orb: ['Orbitron', 'sans-serif'],
        din: ['DIN', 'sans-serif'],
      },
    },
    screen: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
      // => @media (min-width: 1920) { ... }
      '4xl': '2560px',
      // => @media (min-width: 2560) { ... }
    },
  },
};
