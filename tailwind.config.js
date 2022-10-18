/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['-apple-system', 'BlinkMacSystemFont'],
      'serif': ['Georgia', 'Cambria'],
      'mono': ['SFMono-Regular', 'Menlo'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
      'noto-sans': ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
      'quicksand':['"Quicksand"']
        },
    extend: {
      animation: {
        'imageMove': 'moveImage 2s linear',
      },
      keyframes: {
        moveImage: {
          '0%': {transform: 'translateY(100%)'},
          '100%': {transform: 'translateY(0%)'},
        }
      }
    },
  },
  plugins: [],
}
