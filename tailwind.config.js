/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { black: { 100: '#222222', 500: '#28282e' } },
      },
      fontFamily: { inter: ['var(--font-inter)'] },
    },
  },
  plugins: [],
}
