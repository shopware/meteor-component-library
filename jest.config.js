/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    "js",
    "ts",
    "json",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "@vue/vue2-jest"
  },
  roots: ['src'],
  testMatch: ['<rootDir>/src/**/*.spec.js', '<rootDir>/src/**/*.spec.ts'],
  collectCoverage: false,
  collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"]
};