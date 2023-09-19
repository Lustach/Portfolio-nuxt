module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // 'prettier/prettier': [
    //   'warn',
    //   {
    //     singleQuote: false,
    //     semi: true
    //   }
    // ]
    "array-bracket-spacing": [ "error", "always", ],
    quotes: [ 2, "double", { avoidEscape: true, }, ],
    "comma-dangle": [ "error", "always", ],
    semi: [ "error", "always", ],
  },
};
