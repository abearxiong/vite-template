console.log('tailwind.config.js')
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
  theme: {
    extend: {},
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
      '4xl': '2560px'
      // => @media (min-width: 2560) { ... }
    }
  },
  plugins: [require("tailwindcss-animate")]
}
