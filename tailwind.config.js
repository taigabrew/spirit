const { colors, fontFamily, spacing } = require('tailwindcss/defaultTheme')

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
      },
      boxShadow: {
        soft: '0 3px 10px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.07)',
        focus: `0 0 0 3px ${colors.indigo[400]}`
      },
      transitionProperty: {
        all: 'all',
        bg: 'background-color',
        transform: 'transform',
        text: 'color',
        shadow: 'box-shadow',
        colors: ['color', 'background-color', 'border-color', 'box-shadow'],
        cheap: ['opacity', 'transform']
      },
      transitionDuration: {
        '250': '250ms',
        '325': '325ms',
        '500': '500ms'
      },
      transitionTimingFunction: {
        'in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
        'out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)'
      }
    }
  },
  variants: {},
  plugins: [require('tailwindcss-transitions')()]
}
