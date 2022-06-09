const path = require('path');
const custom = require('../node_modules/@vue/cli-service/webpack.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
  ],
  features: {
    interactionsDebugger: true,
  },
  "framework": "@storybook/vue",
  "webpackFinal": (config) => {
    config.module.rules.push(custom.module.rules[9]);

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
        ]
      },
      plugins: [
        // ...custom.plugins,
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
        }),
        ...config.plugins
      ]
    };
  },
};
