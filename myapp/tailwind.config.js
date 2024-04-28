/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize:{
      'big': "100px",
    },
    extend: {
      'cosmBlue,': '#4A3AFF'
    },
  },
  plugins: [],
}
