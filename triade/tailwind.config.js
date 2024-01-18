/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#faa300",
        secondary: "#9b3d12",
        third: "#5e747f",
        black: "#000",
        white: "#fff",
      },
      backgroundImage: (theme) => ({
        "main-mobile": "url('./src/img/main-mobile.jpg')",
      }),
    },
  },
  plugins: [],
};
