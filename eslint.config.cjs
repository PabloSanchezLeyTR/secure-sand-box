const { FlatCompat } = require('@eslint/eslintrc');
const path = require('path');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    eslint: require('eslint/conf/eslint-recommended'),
    typescript: require('@typescript-eslint/eslint-plugin/dist/configs/recommended'),
    angular: require('@angular-eslint/eslint-plugin/dist/configs/recommended'),
    angularTemplate: require('@angular-eslint/template-parser/dist/configs/recommended'),
  },
});

module.exports = [
  ...compat.config({
    root: true,
    ignorePatterns: ['**/*.js'],
    overrides: [
      {
        files: ['*.ts'],
        parserOptions: {
          project: ['tsconfig.json'],
          createDefaultProgram: true,
        },
        extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:@angular-eslint/recommended',
        ],
        plugins: ['@typescript-eslint'],
        rules: {
          '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
          '@typescript-eslint/no-explicit-any': 'warn',
          '@typescript-eslint/explicit-function-return-type': 'off',
          'no-console': 'warn',
        },
      },
      {
        files: ['*.html'],
        extends: ['plugin:@angular-eslint/template/recommended'],
        plugins: ['@angular-eslint/template'],
        rules: {
          '@angular-eslint/template/no-negated-async': 'error',
          '@angular-eslint/template/accessible-name': 'warn',
        },
      },
    ],
  }),
];
