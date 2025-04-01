import { join, dirname } from "path"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

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

  //refs for deployment
  "refs": {
    "angular": {
      title: 'Angular',
      url: 'https://rte-france.github.io/design-system-rte/angular/',
    },
    "react": {
      title: 'React',
      url: 'https://rte-france.github.io/design-system-rte/react/',
    },
  },
  //refs for local test
  "refs": {
    "angular": {
      title: 'Angular',
      url: 'http://localhost:7007',
    },
    "react": {
      title: 'React',
      url: 'http://localhost:7008',
    },
  },
};
export default config;