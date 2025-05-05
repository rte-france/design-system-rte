import type { StorybookConfig } from '@storybook/angular';
import { join, dirname, resolve } from "path";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const isCI = process.env.CI === 'true';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath("@storybook/addon-a11y")
  ],
  "framework": {
    "name": getAbsolutePath('@storybook/angular'),
    "options": {}
  },
  webpackFinal: async (config) => {
    config!.resolve!.alias = {
      ...config!.resolve!.alias,
      '@design-system-rte/core': isCI 
        ? resolve(__dirname, '../../core/lib')
        : resolve(__dirname, '../node_modules/@design-system-rte/core')
    };
    return config;
  }
};

export default config;