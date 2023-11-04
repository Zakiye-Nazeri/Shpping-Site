/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-rosheh": "#69765a"
      },
      container:{
        "center": true,
      },
    },
  },
  plugins: [],
}