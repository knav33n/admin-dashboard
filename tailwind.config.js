/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#343C6A",
        secondary: "#F5F7FA",
        accentBlue: "#8BA3CB",
        dark: "#232323",
        lightBlue: "#718EBF",
        brightBlue: "#396AFF",
        gray: "#B1B1B1",
        errorRed: "#FF4B4A",
        successGreen: "#41D4A8",
        borderGray: "#DFEAF2",
        paleBlue: "#EDF1F7"
      },
      fontSize: {
        '2.5xl': '22px',
      },
      boxShadow: {
        'custom': '4px 4px 18px -2px #E7E4E8CC',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
