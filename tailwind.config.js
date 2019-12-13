const { fontFamily, spacing } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', ...fontFamily.sans]
      },
      inset: {
        ...spacing,
        '1/2': '50%',
        full: '100%'
      },
      zIndex: {
        '-1': -1
      }
    }
  },
  variants: {},
  plugins: []
}
