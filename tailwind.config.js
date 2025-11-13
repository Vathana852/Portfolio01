/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/screen/*.{js,jsx,ts,tsx}",  // important so your HomeScreen.jsx is scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
