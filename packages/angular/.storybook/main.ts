import type { StorybookConfig } from '@storybook/angular';
import { resolve, join, dirname } from "path";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

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
      '@design-system-rte/core': resolve(__dirname, '../../core/lib'),
      'core-fonts': resolve(__dirname, '../../core/assets/fonts'),
      '../../core/lib/tokens/primitives/core-fonts': resolve(__dirname, '../../core/assets/fonts'),
      '../../../../core/lib/tokens/primitives/core-fonts': resolve(__dirname, '../../core/assets/fonts')
    };

    config!.module!.rules!.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });
    return config;
  }
  
};

export default config;