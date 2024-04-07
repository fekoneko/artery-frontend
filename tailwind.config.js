/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        input: '#263986'
      },
      borderRadius: {
        30: '30px'
      }
    },
  },
  plugins: [],
}