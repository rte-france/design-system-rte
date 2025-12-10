import { join, dirname } from "path";

import type { StorybookConfig } from "@storybook/angular";

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../projects/ds-rte-lib/src/**/*.mdx", "../projects/ds-rte-lib/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  staticDirs: ["../projects/ds-rte-lib/src/lib"],
  framework: {
    name: getAbsolutePath("@storybook/angular"),
    options: {},
  },
  babel: async (options) => ({
    ...options,
    presets: [
      ...options.presets,
      require.resolve("@babel/preset-env"),
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-typescript"),
    ],
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
  }),
  webpackFinal: async (config) => {
    config.module?.rules?.push(
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/, /src/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
            plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    );

    // Configure watch options to reduce excessive HMR checks
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        "**/node_modules/**",
        "**/dist/**",
        "**/.angular/cache/**",
        "**/storybook-static/**",
        "**/coverage/**",
        "**/.git/**",
        "**/documentation.json",
      ],
      aggregateTimeout: 300,
      poll: false,
    };

    return config;
  },
};

export default config;
