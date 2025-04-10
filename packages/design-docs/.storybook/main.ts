import { join, dirname } from "path"

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, 'package.json')))
}

const PRODUCTION_PATH = 'https://opensource.rte-france.com/design-system-rte'

const DEVELOPEMENT_DEPLOYMENT_CONFIG = {
  angular: {
    title: 'Angular',
    url: 'http://localhost:7007',
  },
  react: {
    title: 'React',
    url: 'http://localhost:7008',
  },
};

const PRODUCTION_DEPLOYMENT_CONFIG = {
  angular: {
      title: 'Angular',
      url: `${PRODUCTION_PATH}/angular/`,
  },
  react: {
      title: 'React',
      url: `${PRODUCTION_PATH}/react/`,
  },
};

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  "framework": {
    "name": getAbsolutePath('@storybook/react-vite'),
    "options": {}
  },

  refs: (_, { configType }) => {
    return configType === 'PRODUCTION' ? PRODUCTION_DEPLOYMENT_CONFIG : DEVELOPEMENT_DEPLOYMENT_CONFIG;
  },
};
export default config;