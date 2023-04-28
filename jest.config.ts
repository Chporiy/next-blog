import nextJest from 'next/jest';
import type { JestConfigWithTsJest } from 'ts-jest/dist/types';

const createJestConfig = nextJest();
const customJestConfig: JestConfigWithTsJest = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
};

export default createJestConfig(customJestConfig);
