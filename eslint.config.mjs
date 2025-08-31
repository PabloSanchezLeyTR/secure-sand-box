import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
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
