const defaultTheme = require('tailwindcss/defaultTheme');
export const plugins = [
    require('daisyui'),
];
export const theme = {
    extend: {
        colors: {
            primary: '#3C50E0',
            secondary: '#5A698D'
        },
    },
    fontFamily: {
        'sans': ['Causten', ...defaultTheme.fontFamily.sans],
        'serif': ['Causten', ...defaultTheme.fontFamily.serif],
        'mono': ['Causten', ...defaultTheme.fontFamily.sans],
        'body': ['Causten', ...defaultTheme.fontFamily.sans],
        'display': ['Causten', ...defaultTheme.fontFamily.sans]
    }
};
export const purse = {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
}