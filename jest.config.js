/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  // clearMocks: true,
  // coverageDirectory: "coverage",
  // coverageProvider: "v8",
  // moduleNameMapper: {
  //   "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  // },

  // roots: ["<rootDir>"],

  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],

  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },

  testEnvironment: "jsdom",
};
