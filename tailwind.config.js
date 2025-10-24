/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'caltech-orange': '#FF6F00',
        'vahala-blue': '#003366',
        'hku-green': '#00664B',
        'hku-darkGreen': '#00462F',
        'hku-gold': '#C9A227',
      },
      fontFamily: {
        'sans': ['Questrial', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}