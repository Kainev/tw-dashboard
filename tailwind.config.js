/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightground: {
          DEFAULT: '#f7f7f9',
          lighter: '#ffffff'
        },
        darkground: {
          DEFAULT: '#282a42',
          lighter: '#30334E',
          lightest: '#535568'
        },
      }
    },
  },
  plugins: [],
}
