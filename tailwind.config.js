module.exports = {
  purge:{
    enabled: true,
    content: ['./public/**/*.html', './public/**/*.js']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        "bgimg": "background-image",
       },
      colors: {
        gradGreen: "#00F260",
        gradBlue: "#0575E6",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
