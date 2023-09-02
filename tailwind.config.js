/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // light
        funBLue: '#225CB3',
        softPeach: '#EDEDED',
        // dark
        balticSea: '#222C32',
        denimBLue: '#68C4EE',
      },
      backgroundColor: {
        // light
        funBLue: '#225CB3',
        softPeach: '#EDEDED',
        // dark
        balticSea: '#222C32',
        denimBLue: '#68C4EE',
      },
    },
  },
  plugins: [],
};
