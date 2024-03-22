/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlack: "#060606",
        darkGray: "#363636",
        lightGray: "#EAE9E9",
        ironGray:"#232323",
      }
    },
  },
  plugins: [],
}

