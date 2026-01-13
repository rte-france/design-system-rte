import { join, dirname, resolve } from "path";

import type { StorybookConfig } from "@storybook/angular";
import type { RuleSetRule } from "webpack";

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../projects/ds-rte-lib/src/**/*.mdx",
    "../projects/ds-rte-lib/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../core/components/**/docs/**/*.mdx",
  ],
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
    presets: [
      ...options.presets,
      require.resolve("@babel/preset-env"),
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-typescript"),
    ],
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
  }),
  webpackFinal: async (config) => {
    // Configure resolve alias for /assets/fonts to resolve font file paths in SCSS
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "/assets/fonts": resolve(__dirname, "../../core/assets/fonts"),
    };

    // Provide React globally for React components used in MDX/docs
    config.resolve.alias = {
      ...config.resolve.alias,
      react: resolve(__dirname, "../../../node_modules/react"),
      "react-dom": resolve(__dirname, "../../../node_modules/react-dom"),
    };

    // Make React available globally for React components used in MDX/docs
    if (!config.plugins) {
      config.plugins = [];
    }
    // Add ProvidePlugin to make React available globally
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const webpack = require("webpack");
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: "react",
      }) as (typeof config.plugins)[number],
    );

    // Exclude external React/TSX files from @ngtools/webpack processing
    // These files should be handled by babel-loader instead
    if (config.module?.rules) {
      config.module.rules.forEach((rule) => {
        if (rule && typeof rule === "object" && "loader" in rule) {
          const ruleSetRule = rule as RuleSetRule;
          if (
            ruleSetRule.loader &&
            typeof ruleSetRule.loader === "string" &&
            ruleSetRule.loader.includes("@ngtools/webpack")
          ) {
            // Exclude core, design-docs, and react packages from Angular compiler
            const originalExclude = ruleSetRule.exclude || [];
            ruleSetRule.exclude = [
              ...(Array.isArray(originalExclude) ? originalExclude : [originalExclude]),
              /core\/components/,
              /design-docs\/src\/components/,
            ].filter(Boolean);
          }
        }
      });
    }

    // Add SCSS rule for design-docs and core components that includes css-loader to handle @import url()
    // This must come before the default SCSS rule so it matches first
    config.module?.rules?.unshift({
      test: /\.scss$/,
      include: [/design-docs/, /core\/components/],
      use: ["style-loader", "css-loader", "sass-loader"],
    });

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
        include: [/core\/components/, /design-docs\/src\/components/],
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
