module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#F75940',
      },
      screens: {
        'print': {'raw': 'print'},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    '@tailwindcss/forms'
  ],
}
