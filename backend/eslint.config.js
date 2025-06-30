import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import { eslintSharedRules } from '../eslint.config';

export default [
  {
    files: ['**/*.ts'],
    ignores: ['dist', 'node_modules'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
      ecmaVersion: 'latest',
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
    },
    rules: {
    ...eslintSharedRules,
    'no-console': 'warn',
    },
  },
];
