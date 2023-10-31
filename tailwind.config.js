/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    colors: {
      accent: "#666bff",
      accent2: "#4633d7",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      light: {
        3: 'rgba(255,255,255,0.03)',
        5: 'rgba(255,255,255,0.05)',
        8: 'rgba(255,255,255,0.08)',
        10: 'rgba(255,255,255,0.1)',
        15: 'rgba(255,255,255,0.15)',
      },
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      contrast: {
        3: 'rgba(9,14,35,0.03)',
        5: 'rgba(9,14,35,0.05)',
        8: 'rgba(9,14,35,0.08)',
        10: 'rgba(9,14,35,0.1)',
        15: 'rgba(9,14,35,0.15)',
        20: 'rgba(9,14,35,0.2)',
        30: 'rgba(9,14,35,0.3)',
        50: 'rgba(9,14,35,0.5)'
      },
    },
    extend: {
      transitionProperty: {
        width: "width"
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

