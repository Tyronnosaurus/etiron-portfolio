const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",     // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4)       2px, #f5f5f5 5px, #f5f5f5 100px);',
        circularDark:  'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 100px);'
      }
    },
    screens: {
      'xs': '480px',   // => @media (min-width: 480px) { ... }
      'sm': '640px',   // => @media (min-width: 640px) { ... }
      'md': '768px',   // => @media (min-width: 768px) { ... }
      'lg': '1024px',  // => @media (min-width: 1024px) { ... }
      'xl': '1280px',  // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
    }
  },

  
  plugins: []
}

