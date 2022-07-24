import nextJest from 'next/jest';
import type { InitialOptionsTsJest } from 'ts-jest/dist/types';

const createJestConfig = nextJest({ dir: './' });
const customJestConfig: InitialOptionsTsJest = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
};

export default createJestConfig(customJestConfig);
