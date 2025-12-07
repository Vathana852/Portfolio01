import tailwindcss from '@tailwindcss/vite';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/screen/*.{js,jsx,ts,tsx}",  // important so your HomeScreen.jsx is scanned
  ],
  theme: {
    extend: {
      colors: {
        primary: "#243037", 
        secondary: "#FDC101",
      },
    },
  },
  plugins: [
    tailwindcss,
  ],
}