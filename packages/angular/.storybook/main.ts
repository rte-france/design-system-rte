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
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    );
    return config;
  },
};

export default config;
