/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'white': '#EAF2FF',
      'black': '#18181A',
      'pure-white': '#FFFFFF',
      'pure-black': '#000000',
      'primary': '#0098C8',
      'secondary': '#54CAD1',
      'primary-option': '#A8E007',
      'secondary-option': '#032133',
      'secondary-black': '#1B1B1B',
      'secondary-white': '#EAEAEA',
      'white-option': 'rgba(255, 255, 255, 0.41)',
    },
    fontFamily: {
      'jost': ['Jost', 'sans-serif'],
      'palanquin-dark': ['Palanquin Dark', 'sans-serif'],
      'news-cycle': ['News Cycle', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}
