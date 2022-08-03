/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Square Peg", "cursive"],
      },
      boxShadow: {
        "3xl":
          "0 0 50px tomato, 0 0 30px orange, inset 0 10px 10px 20px #ddd, inset 30px 0 35px 50px #ccc",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(4px 4px at 100px 50px, #fff, transparent), radial-gradient(6px 6px at 200px 150px, #fff, transparent), radial-gradient(3px 3px at 300px 250px, #fff, transparent), radial-gradient(4px 4px at 400px 350px, #fff, transparent),radial-gradient(6px 6px at 500px 100px, #fff, transparent),radial-gradient(3px 3px at 50px 200px, #fff, transparent),radial-gradient(4px 4px at 150px 300px, #fff, transparent),radial-gradient(6px 6px at 250px 400px, #fff, transparent),radial-gradient(4px 4px at 350px 500px, #fff, transparent)",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        650: "650px 650px",
      },
    },
  },
  plugins: [],
};
// 'Square Peg', cursive
