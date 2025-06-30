export const eslintSharedRules = {
  '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  '@typescript-eslint/no-explicit-any': 'warn',
  'semi': ['error', 'always'],
  'quotes': ['error', 'single'],
  'comma-dangle': ['error', 'always-multiline'],
  'eqeqeq': ['error', 'always'],
  'prefer-const': 'error',
};