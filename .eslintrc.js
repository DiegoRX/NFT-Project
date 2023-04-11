module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended', 'next', 'next/core-web-vitals'],
  rules: {
    semi: ['error', 'always'],
    'prettier/prettier': ['off', { singleQuote: true }],
    'react/display-name': 'off',
    'jsx-a11y/autocomplete-valid': [
      'error',
      {
        'inputComponents': ['Input', 'FormField']
      }
    ]
  },
};
