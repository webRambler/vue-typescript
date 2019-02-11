module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multi-spaces': 1,
    'quotes': [1, 'single'],
    'no-useless-return': 0,
    'no-multiple-empty-lines': [1, { "max": 3 }],
    'no-undef': 2,
    'space-before-function-paren': 0,
    'no-return-assign': 0,
    'brace-style': [1, 'stroustrup'],
    'array-bracket-newline': 0,
    'comma-spacing': 0,
    'multiline-ternary': [2, 'never']
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
