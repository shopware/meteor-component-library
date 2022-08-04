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
  staticDirs: ['../public'],
  "webpackFinal": (config) => {
    config.module.rules.push(custom.module.rules[9]);


    const fileLoader = config.module.rules.find(l => l.hasOwnProperty('loader') && l.loader.includes('file-loader'));
    if (!fileLoader.exclude) {
      fileLoader.exclude = [];
    }
    fileLoader.exclude.push(/@shopware-ag\/meteor-icon-kit\/icons/);

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          {
            test: /\.svg$/,
            include: [
              /@shopware-ag\/meteor-icon-kit\/icons/,
            ],
            loader: 'svg-inline-loader',
            options: {
              removeSVGTagAttrs: false,
            },
          },
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
