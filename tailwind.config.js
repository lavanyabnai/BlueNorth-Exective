/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "BlueNorth": '#0A1172',
        "gray":'#eae8eb',
      }
    },
  },
  plugins: [],
}
