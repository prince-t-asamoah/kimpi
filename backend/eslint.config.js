import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import { eslintSharedRules } from '../eslint.config.js';
import eslintPluginPrettier from 'eslint-plugin-prettier';

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
      'prettier': eslintPluginPrettier
    },
    rules: {
    ...eslintSharedRules,
    'no-console': 'warn',
    'prettier/prettier': ['error']
    },
  },
];
