module.exports = {
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-simple-import-sort",
    "react",
    "react-hooks",
    "jsx-a11y",
    "react-hooks",
    "testing-library",
  ],
  rules: {
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off",
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
