/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
console.log('colors: ', colors);

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
      
    colors: {
      ...colors,
      'blue': {
        DEFAULT: '#365486',
      },
      'dark-blue': {
        DEFAULT: '#0F1035',
      },
      'light-blue': {
        DEFAULT: '#7FC7D9',
      },
      'sky-blue': {
        DEFAULT: '#DCF2F1',
      },
    },
    
    extend: {
     
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}