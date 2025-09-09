const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-1': colors.stone[950],
        'gray-2': colors.stone[700],
        'gray-dark-1': '#0F0F0F', // Fundo principal
        'gray-dark-2': '#1E1E1E', // Fundo dos cards
        'gray-dark-3': '#2B2B2B', // Elementos internos dos cards
        'gray-light-1': '#F5F5F5', // Texto principal
        'gray-light-2': '#BDBDBD', // Texto secundário
        'gray-light-3': '#9E9E9E', // Texto de detalhes e bordas
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('/images/background-hero.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};