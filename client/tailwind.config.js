/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary2: "#FF0990"
      },
      
      fontFamily:{
        frikiFont: "Silkscreen",
      },
      backgroundImage:{
        primary:"linear-gradient(90deg, rgba(41,143,106,1) 6%, rgba(0,245,255,1) 100%)"
      }
    },

  },
  plugins: [],
}