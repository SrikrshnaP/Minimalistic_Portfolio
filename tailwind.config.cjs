/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{html,jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:
      {
        inter: ['Inter', 'serif'],
      }
    },
  },
  plugins: [],
}
