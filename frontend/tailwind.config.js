/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', "sans-serif"], // Replace 'Roboto' with your font's name
      },
      fontWeight: {
        // You can customize the font weights if necessary
        thin: 100,
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
      colors: {
        customYellow: '#ebb434', // Replace 'customYellow' with your preferred name
      },
    },
  },
  plugins: [],
};
