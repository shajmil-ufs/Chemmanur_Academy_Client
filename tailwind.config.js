/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
  console.log('colors: ', colors);
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line

  ],
  theme: {
    colors: {
     ...colors
   
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

