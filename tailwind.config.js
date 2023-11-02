const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: colors.orange,
      gray: colors.gray,
      blue: colors.blueGray,
      white: colors.white,
      pink: colors.pink,
      transparent: colors.transparent,
      brown: colors.brown,
    },
    screens: {
      'sm': '300px',
      'lg': '700px'
    },
    // fontFamily: {
    //   'sans': ['ui-sans-serif', 'system-ui'],
    //   'serif': ['ui-serif', 'Georgia'],
    //   'mono': ['ui-monospace', 'SFMono-Regular'],
    //   'montserrat': ['Montserrat'],
    //  },
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/src/assets/hero.jpg')",
        'action': "url('/src/assets/action.png')",
      })
    },
  },
  variants: {
    extend: {
      translate: ['hover'],
    },
  },
  plugins: [],
}