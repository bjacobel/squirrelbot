module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  env: {
    es6: true,
    jest: true,
    node: true,
    jasmine: true,
  },
  extends: [
    'eslint-config-airbnb-base',
  ],
  rules: {
    'arrow-body-style': 0,
    'func-names': 0,
    'max-len': [2, 120, 2],
    'no-else-return': 0,
    'no-console': 0,
  },
};
