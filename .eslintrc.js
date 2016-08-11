module.exports = {
  parserOptions: {
    ecmaVersion: 6,
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
    'import/imports-first': 0,  // doesn't play nice with Jest
    'max-len': [2, 120, 2],
    'no-else-return': 0,
    'no-console': 0,
  },
};
