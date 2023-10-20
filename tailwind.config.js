/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Open Sans"]
      // },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      }
    }
  },
  plugins: [],
}
