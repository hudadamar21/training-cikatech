const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#DBC8B5',
          200: '#D3B797' 
        },
        'dark-gray': '#414655'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
