module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "script",
  },
  plugins: ["prettier"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    "object-curly-spacing": ["error", "always"],
    quotes: ["error", "double"],
    semi: ["error", "always", { omitLastInOneLineBlock: true }],
    "comma-dangle": ["error", "always-multiline"],
    "one-var": ["error", { initialized: "never" }],
    "one-var-declaration-per-line": ["error", "initializations"],
    "no-var": "error",
    "arrow-parens": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        trailingComma: "all",
        arrowParens: "always",
      },
    ],
  },
  globals: {
    module: true,
    process: true,
  },
};
