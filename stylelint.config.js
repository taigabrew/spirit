module.exports = {
  extends: 'stylelint-config-recommended',
  plugins: [],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply']
      }
    ],
    'block-no-empty': null,
    'unit-whitelist': [
      'em',
      'rem',
      's',
      'ms',
      'px',
      '%',
      'vh',
      'vw',
      'deg',
      'fr'
    ]
  }
}
