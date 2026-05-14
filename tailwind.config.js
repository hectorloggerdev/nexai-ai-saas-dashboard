/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#070A12',
        panel: '#0D1324',
        electric: '#7C3AED',
        cyanx: '#06B6D4',
        mintx: '#2DD4BF',
        soft: '#E8ECF7'
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 58, 237, 0.28)'
      }
    },
  },
  plugins: [],
}
