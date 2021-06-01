const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
      ]
  },
  theme: {
    extend: {
        colors: {
          primary: '#3C50E0',
          secondary: '#5A698D',
          tertiary: '#00005C'
        },
    },
    fontFamily: {
      'sans': ['Causten', ...defaultTheme.fontFamily.sans],
      'serif': ['Causten', ...defaultTheme.fontFamily.serif],
      'mono': ['Causten', ...defaultTheme.fontFamily.sans],
      'body': ['Causten', ...defaultTheme.fontFamily.sans],
      'display': ['Causten', ...defaultTheme.fontFamily.sans]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),],
}