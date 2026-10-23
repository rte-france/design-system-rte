import { join, dirname, resolve } from "path";

import type { StorybookConfig } from "@storybook/angular";

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../projects/ds-rte-lib/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  staticDirs: ["../projects/ds-rte-lib/src/lib", { from: "../../core/assets", to: "/assets" }],
  framework: {
    name: getAbsolutePath("@storybook/angular"),
    options: {},
  },
  babel: async (options) => ({
    ...options,
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
  }),
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "/assets/fonts": resolve(__dirname, "../../core/assets/fonts"),
    };

    config.module?.rules?.unshift({
      test: /\.scss$/,
      include: [/core\/components/],
      use: ["style-loader", "css-loader", "sass-loader"],
    });

    config.module?.rules?.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    });

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
