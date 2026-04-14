/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'am-base': '#F5F1E9', // Creme suave (fundo)
        'am-primary': '#2A8C4A', // Verde Floresta Vibrante
        'am-secondary': '#A5D6A7', // Verde Sálvia
        'am-cafe': '#4A2E1C', // Marrom Espresso (acentos/títulos)
        'am-dark': '#263238', // Grafite (textos pesados)
      }
    },
  },
  plugins: [],
}