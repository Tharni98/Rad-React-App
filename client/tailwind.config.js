/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans :['inter','sans-serif']
      },
      colors: {
        primary: '0B2447',
        secondary: '#E43A15',
        tertiary:'#A5D7E8'
      },


    },
  },
  plugins: [],
}

