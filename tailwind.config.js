/** @type {import(tailwindcss).Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        White: "#FFFFFF",
        LightGray: "#D1D1D1",
        GrayishBlue: "#8C9BA5",
        DarkBlue: "#0E1C31",
      },
    },
  },
  plugins: [],
};
