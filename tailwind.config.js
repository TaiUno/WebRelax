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
          "radial-gradient(4px 4px at 100px 50px, #fff, transparent), radial-gradient(6px 6px at 200px 150px, #fff, transparent), radial-gradient(3px 3px at 300px 250px, #fff, transparent), radial-gradient(4px 4px at 400px 350px, #fff, transparent),radial-gradient(6px 6px at 500px 100px, #fff, transparent),radial-gradient(3px 3px at 50px 200px, #fff, transparent),radial-gradient(4px 4px at 150px 300px, #fff, transparent),radial-gradient(6px 6px at 250px 400px, #fff, transparent),radial-gradient(4px 4px at 350px 500px, #fff, transparent),radial-gradient(3px 3px at 550px 550px, #fff, transparent),radial-gradient(0.5px 0.5px at 10px 50px, #fff, transparent),radial-gradient(0.5px 0.5px at 600px 100px, #fff, transparent),radial-gradient(1.5px 1.5px at 100px 500px, #fff, transparent)",
        "uyen-em": "url('../src/img/em_02.jpg')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        650: "650px 650px",
      },
      blur: {
        xs: "2px",
        is: "1px",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
        "spin-slow-no-repeat": "spin 4s linear",
        "calcir-slow": "calcir 5s cubic-bezier(1, 1, 1, 1)",
      },
      keyframes: {
        spin: {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-650px)",
          },
        },
        calcir: {
          "100%": {
            transform: "scale(0.0)",
            "-webkit-transform": "scale(0.0)",
          },
          "20%": {
            transform: "scale(1.0)",
            "-webkit-transform": "scale(1.0)",
            // transform: "translateY(-650px)",
          },
        },
      },
    },
  },
  plugins: [],
};
// 'Square Peg', cursive
