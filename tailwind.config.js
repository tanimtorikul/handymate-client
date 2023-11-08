/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firasans: ['Fira Sans', 'sans'],
    },
    
    },
  },
  plugins: [require("daisyui")],
}