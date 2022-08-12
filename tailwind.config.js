/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Square Peg', 'cursive'],
      },
      boxShadow: {
        '3xl':
          '0 0 50px tomato, 0 0 30px orange, inset 0 10px 10px 20px #ddd, inset 30px 0 35px 50px #ccc',
        'clock-xl':
          '0 -15px 15px rgba(255, 255, 255, 0.05), inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 15px 15px rgba(0, 0, 0, 0.05), inset 0 15px 15px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        clock: "url('/src/images/clock.png')",
        'uyen-em0': "url('/src/images/em_00.JPG')",
        'uyen-em1': "url('/src/images/em_01.jpg')",
        'uyen-em2': "url('/src/images/em_02.jpg')",
        'uyen-em3': "url('/src/images/em_03.jpg')",
        'uyen-em4': "url('/src/images/em_04.jpg')",
        'gradient-radial':
          'radial-gradient(4px 4px at 100px 50px, #fff, transparent), radial-gradient(6px 6px at 200px 150px, #fff, transparent), radial-gradient(3px 3px at 300px 250px, #fff, transparent), radial-gradient(4px 4px at 400px 350px, #fff, transparent),radial-gradient(6px 6px at 500px 100px, #fff, transparent),radial-gradient(3px 3px at 50px 200px, #fff, transparent),radial-gradient(4px 4px at 150px 300px, #fff, transparent),radial-gradient(6px 6px at 250px 400px, #fff, transparent),radial-gradient(4px 4px at 350px 500px, #fff, transparent),radial-gradient(3px 3px at 550px 550px, #fff, transparent),radial-gradient(0.5px 0.5px at 10px 50px, #fff, transparent),radial-gradient(0.5px 0.5px at 600px 100px, #fff, transparent),radial-gradient(1.5px 1.5px at 100px 500px, #fff, transparent)',
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        650: '650px 650px',
      },
      blur: {
        xs: '2px',
        is: '1px',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'ping-slow': 'ping 4s cubic-bezier(1, 1, 0.2, 1)',
        'textblur-slow': 'calcir 5s linear',
        'textblur-down-up-slow': 'calcirDownUp 0.3s linear',
        'textblur-slow1': 'spin 15s linear',
        'textblur-slow2': 'ping 5s linear',
        'textblur-slow3': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'calcir-slow': 'calcir 5s cubic-bezier(1, 1, 1, 1)',
      },
      keyframes: {
        spin: {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(-650px)',
          },
        },
        calcir: {
          '100%': {
            transform: 'scale(0.0)',
            '-webkit-transform': 'scale(0.0)',
          },
          '20%': {
            transform: 'scale(1.0)',
            '-webkit-transform': 'scale(1.0)',
          },
        },
        calcirDownUp: {
          '45%': {
            transform: 'scale(0.0)',
            '-webkit-transform': 'scale(0.0)',
          },
          '100%': {
            transform: 'scale(1.0)',
            '-webkit-transform': 'scale(1.0)',
          },
          '40%': {
            transform: 'scale(0.0)',
            '-webkit-transform': 'scale(0.0)',
          },
        },
      },
    },
  },
  plugins: [],
};
