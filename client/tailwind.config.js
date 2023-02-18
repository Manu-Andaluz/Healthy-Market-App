/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'green1': '#606C38',
        'green2': '#A1C181',
        'crema': '#FEFAE0',
        'beige': '#DDA15E',
        'rosa': '#FAA275',
      },
      fontFamily:{
         "continuo":["Continuo Regular","sans-serif"] ,
          "bree":["Thin","sans-serif"],
      },
  },
  plugins: [require('flowbite/plugin')],
}