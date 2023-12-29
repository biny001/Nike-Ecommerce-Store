/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Set margin and padding to 0 for all elements
      margin: {
        0: "0",
      },
      padding: {
        0: "0",
      },
      // Set box-sizing to border-box for all elements
      boxSizing: {
        "border-box": "border-box",
      },
      // Add any other custom styles or modifications you need
      fontFamily: {
        sans: "Poppins, sans-serif",
        serif: "Gruppo, sans-serif",
      },
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      height: {
        screen: "100vh", // Fix typo, it should be 100vh instead of 100dvh
      },
    },
  },
  plugins: [],
};
