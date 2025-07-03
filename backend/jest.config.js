/** @type {import('jest').Config} */
import sharedJestConfig from '../jest.shared.js';

const config  = {
  displayName: 'backend',
  ...sharedJestConfig,
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts', '**/src/**/*.test.ts'],
};

export default config;
