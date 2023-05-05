/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": "#ede9ec",
        "dark": "#272727",
        "viridian": "#109193",
        "marigold": "#ed9f31",
        "mulberry": "#be4b88",
      },
      fontFamily: {
        "karla": ["Karla", "sans-serif"]
      }
    },

  },
  plugins: [],
}

