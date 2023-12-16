/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-pattern': "url('./src/assets/mainbg2.png')",
        'main-pattern2': "url('./src/assets/mainbg.png')",
      },
      colors: {
        'enfanato' : "#FAB6B6",
        'elemental' : "#7461B0",
        'textal' : "#605D70",
      }
    },
  },
  plugins: [],
}

