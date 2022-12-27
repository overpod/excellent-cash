/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,vue,ts}', './app.vue'],
  theme: {
    extend: {},
    screens: {
      sm: '320px', // => @media (min-width: 320px) { ... }
      md: '640px', // => @media (min-width: 640px) { ... }
      lg: '960px', // => @media (min-width: 960px) { ... }
      xl: '1200px', // => @media (min-width: 1200px) { ... }
      '2xl': '1440px', // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
      body: ['Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
};
