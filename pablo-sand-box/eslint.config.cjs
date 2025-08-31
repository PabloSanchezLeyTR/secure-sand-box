const { FlatCompat } = require("@eslint/eslintrc");
const path = require("path");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    eslint: { plugins: {}, rules: {} }, // vacío para evitar el error
  },
});

module.exports = [
  ...compat.config({
    root: true,
    ignorePatterns: ["**/*.js"],
    overrides: [
      {
        files: ["*.ts"],
        parserOptions: {
          project: ["tsconfig.json"],
          createDefaultProgram: true,
        },
        extends: [
          "plugin:@typescript-eslint/recommended",
          "plugin:@angular-eslint/recommended",
        ],
        plugins: ["@typescript-eslint"],
        rules: {
          "@typescript-eslint/no-unused-vars": [
            "error",
            { argsIgnorePattern: "^_" },
          ],
          "@typescript-eslint/no-explicit-any": "warn",
          "@typescript-eslint/explicit-function-return-type": "off",
          "no-console": "warn",
        },
      },
      {
        files: ["*.html"],
        extends: ["plugin:@angular-eslint/template/recommended"],
        plugins: ["@angular-eslint/template"],
        rules: {
          "@angular-eslint/template/no-negated-async": "error",
        },
      },
    ],
  }),
];
