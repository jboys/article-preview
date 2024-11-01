/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    colors: {
      gray: {
        100: "#ecf2f8",
        400: "#9daec2",
        600: "#6e8098",
        800: "#48556a",
      },
      white: "#ffffff",
    },
    extend: {
      boxShadow: {
        custom: "0 40px 40px -10px rgba(201, 213, 225, 0.5)",
        menu: "0 10px 10px 0 rgba(201, 213, 225, 0.5)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      fontSize: {
        sm: ["13px", "20px"],
      },
      letterSpacing: {
        "custom-body": "0.12px",
        "custom-share": "5px",
      },
    },
  },
  plugins: [],
};
