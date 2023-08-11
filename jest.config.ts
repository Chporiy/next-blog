/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import nextJest from 'next/jest';
import type { JestConfigWithTsJest } from 'ts-jest/dist/types';

/**
 * Converts paths defined in tsconfig.json to the format of
 * moduleNameMapper in jest.config.js.
 *
 * For example, {'@alias/*': [ 'path/to/alias/*' ]}
 * Becomes {'@alias/(.*)': [ '<rootDir>/path/to/alias/$1' ]}
 *
 * @param {string} srcPath
 * @param {string} tsconfigPath
 */
function makeModuleNameMapper(srcPath, tsconfigPath) {
  // Get paths from tsconfig
  const { paths } = require(tsconfigPath).compilerOptions;

  const aliases = {};

  // Iterate over paths and convert them into moduleNameMapper format
  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '/(.*)');
    const path = paths[item][0].replace('/*', '/$1');
    aliases[key] = `${srcPath}/${path}`;
  });
  return aliases;
}

const TS_CONFIG_PATH = './tsconfig.json';
const SRC_PATH = '<rootDir>';

const createJestConfig = nextJest();
const customJestConfig: JestConfigWithTsJest = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
  moduleDirectories: ['node_modules', SRC_PATH],
  moduleNameMapper: makeModuleNameMapper(SRC_PATH, TS_CONFIG_PATH),
};

export default createJestConfig(customJestConfig);
