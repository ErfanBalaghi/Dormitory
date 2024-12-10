/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("childed", "& > * > *");
      addVariant("child-hover", "& > *:hover");
    },
    require("tailwind-clip-path"),
  ],
};
