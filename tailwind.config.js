/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        "fade-in-up": {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(0, 100%, 0)",
                    },
                    "100%": {
                        opacity:1,
                        transform: "translate3d(0, 0, 0)",
                    },
                },
      },
      animation:{
        fadeinup:'fade-in-up 1s ease-in-out 0.25s 1',
        
      },
      backgroundImage: {
        'amenities':
          'url(/pngwing-1.png), linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(22, 43, 76, 0.4))',
      },
    },
    colors:{
      yellow_300:"#fde68a",
      yellow_400:"#facc15",
      primary:"#0c0a09",
      secondary:"#fafaf9",
      info:"#d4d4d4",
      success:"#44403c",
      whitegray:"#d4d4d4"
    }
  },
  plugins: [
    require("tailwind-gradient-mask-image"),
    require('tailwindcss-animated')
  ],
}

