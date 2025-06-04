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
};
export default config;
