import { join, dirname } from "path"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

const DEVELOPEMENT_DEPLOYMENT_CONFIG = {
  angular: {
    title: 'Angular Development',
    url: 'http://localhost:7007',
  },
  react: {
    title: 'React Development',
    url: 'http://localhost:7008',
  },
};

const PRODUCTION_DEPLOYMENT_CONFIG = {
  angular: {
      title: 'Angular Production',
      url: 'https://opensource.rte-france.com/design-system-rte/angular/',
  },
  react: {
      title: 'React Production',
      url: 'https://opensource.rte-france.com/design-system-rte/react/',
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
    getAbsolutePath("@storybook/experimental-addon-test"),
    getAbsolutePath("@storybook/addon-themes"),
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