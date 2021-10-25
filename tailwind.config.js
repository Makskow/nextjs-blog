const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      orange: colors.orange
    }
  },
  purge: [
    './pages/**/*.js',
    './components/**/*.js'
  ]
}