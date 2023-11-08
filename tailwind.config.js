/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      container: {
        padding: "1rem",

        // zIndex: {
        //   100: "100",
        // },
      },
    },
  },
  plugins: [],
};
