/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sanstext: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      // serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      // mono: ["SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      // Add more custom font families as needed
    },
    extend: {},
  },
  plugins: [],
};
