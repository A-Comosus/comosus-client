// Stolen from https://nextjs.org/docs/testing#jest-and-react-testing-library

// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './src',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  modulePathIgnorePatterns: ['<rootDir>/src/_generated'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@src/(.*)$': ['<rootDir>/src/$1'],
    '^@generated/(.*)$': ['<rootDir>/_generated/$1'],
    '^@pages/(.*)$': ['<rootDir>/src/pages/$1'],
    '^@common/(.*)$': ['<rootDir>/src/common/$1'],
    '^@modules/(.*)$': ['<rootDir>/src/modules/$1'],
    '^@utils/(.*)$': ['<rootDir>/src/utils/$1'],
    '@fontsource/*': ['<rootDir>/src/utils/__mock__/font-source.mock.js'],
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
