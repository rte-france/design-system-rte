import type { StorybookConfig } from '@storybook/angular';

import { join, dirname } from "path"

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  "stories": [
    "../projects/ds-rte-lib/src/**/*.mdx",
    "../projects/ds-rte-lib/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
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
  }
};
export default config;