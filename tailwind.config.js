// File: tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',  
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',  
        secondary: '#64748B',
      },
    },
  },
  plugins: [],
}
