/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": {
          DEFAULT: "#ede9ec",
          100: "#d8cfd6",
        },
        "dark": {
          DEFAULT: "#272727",
          100: "#373737",
        },
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

