module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "no-unused-vars": 1,
  },
};
