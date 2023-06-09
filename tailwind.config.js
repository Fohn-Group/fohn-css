const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
const forms = require('@tailwindcss/forms');
const loadingState = require('./src/loading');
const transition = require('./src/transition');

module.exports = {
  content: [
    'fohn-ui-default/**/*.txt',
    '../fohn-ui/template/tailwind/**/*.html',
    '../fohn-ui/src/**/*.php',
    '../fohn-js/src/**/*.{html,js,vue}',
    '../fohn-ui/app-test/**/*.{html,php,txt}',
  ],
  safelist: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      purple: colors.purple,
      pink: colors.pink,
      green: colors.green,
      blue: colors.blue,
      yellow: colors.amber,
      red: colors.red,
    }
  },
  plugins: [
    plugin(loadingState),
    plugin(transition),
    forms,
  ],
}
