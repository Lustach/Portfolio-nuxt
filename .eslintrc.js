module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    // "array-bracket-spacing": ["error", "always"],
    // quotes: [2, "double", { avoidEscape: true }],
    // "comma-dangle": ["off", "always"],
    // semi: ["error", "always"],
  },
};
