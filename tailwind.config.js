/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
    "./common/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainDark:'#0B0B0B',
        rojo1:'#B61E17',
        rojo2:'#800000',
        rojo3:'#690000',
        rojo4:'#440000',
        ...colors,
      },
    },
  },
  plugins: [],
}
