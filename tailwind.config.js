/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#000223",
        darkOrange: "#E94E1B",
        lightOranger: "#FD764E",
        lighterOrange: "#FFE1D8",
        bgGray: "#F7F7F9",
        textGray: "#8A9B9B",
      },
    },
  },
  plugins: [],
};
