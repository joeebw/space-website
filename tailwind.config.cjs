/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        'appear-animated': 'appear 0.5s linear',
      }
    },
    fontFamily: {
      "roboto": ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}
