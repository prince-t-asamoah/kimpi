/** @type {import('jest').Config} */
import sharedJestConfig from '../jest.shared.js';

const config = {
  displayName: 'frontend',
  ...sharedJestConfig,
  testEnvironment: 'jsdom',
  testMatch: ['**/__test__/**/*.test.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};

export default config;
