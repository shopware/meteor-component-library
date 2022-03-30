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
          // this conflicts with the rules of storybook
          // TODO: check if interactions work now
          // ...custom.module.rules,
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
