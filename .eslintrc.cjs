/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'plugin:storybook/recommended',
    'plugin:vitest-globals/recommended',
    'plugin:vitest/all',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['vitest'],
  env: {
    node: true,
    "vitest-globals/env": true
  },
  rules: {
    "@typescript-eslint/indent": ["error", 2],
    "vitest/consistent-test-filename": ["error",{
      pattern: ".*\\.spec\\.ts$",
    }],
    "vitest/no-hooks": "off",
    "vitest/require-hook": "off",
    "vitest/prefer-expect-assertions": "off",
    "vitest/max-expects": "off",
    "vitest/prefer-strict-equal": "off",
    "vitest/no-focused-tests": "error",
  }
}
