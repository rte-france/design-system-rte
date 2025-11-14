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
    // Fix SCSS loader chain: ensure css-loader processes CSS output from sass-loader
    // This handles @import url() statements in the compiled CSS
    type WebpackRule = {
      test?: RegExp | string | ((path: string) => boolean);
      use?: Array<string | { loader?: string }>;
      oneOf?: WebpackRule[];
    };

    function findAndFixScssRule(rules: WebpackRule[]): void {
      rules.forEach((rule: WebpackRule) => {
        if (!rule || typeof rule !== "object") return;

        // Handle oneOf rules
        if (rule.oneOf && Array.isArray(rule.oneOf)) {
          findAndFixScssRule(rule.oneOf);
        }

        // Handle direct rules with test
        if (rule.test) {
          const testStr = rule.test.toString();
          if (testStr.includes("scss") || testStr.includes("sass")) {
            if (Array.isArray(rule.use)) {
              const hasCssLoader = rule.use.some(
                (loader: string | { loader?: string }) =>
                  (typeof loader === "string" && loader.includes("css-loader")) ||
                  (typeof loader === "object" && loader.loader?.includes("css-loader")),
              );

              if (!hasCssLoader) {
                // Find sass-loader and insert css-loader after it
                const sassLoaderIndex = rule.use.findIndex(
                  (loader: string | { loader?: string }) =>
                    (typeof loader === "string" && loader.includes("sass-loader")) ||
                    (typeof loader === "object" && loader.loader?.includes("sass-loader")),
                );

                if (sassLoaderIndex !== -1) {
                  rule.use.splice(sassLoaderIndex + 1, 0, "css-loader");
                } else {
                  // If no sass-loader found, add css-loader before the last loader (usually style-loader)
                  rule.use.splice(rule.use.length - 1, 0, "css-loader");
                }
              }
            }
          }
        }
      });
    }

    if (config.module?.rules) {
      const validRules = config.module.rules.filter(
        (rule): rule is WebpackRule => rule !== null && rule !== undefined && typeof rule === "object",
      );
      findAndFixScssRule(validRules);
    }

    // Add SCSS rule for design-docs that includes css-loader to handle @import url()
    // This must come before the default SCSS rule so it matches first
    config.module?.rules?.unshift({
      test: /\.scss$/,
      include: /design-docs/,
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
