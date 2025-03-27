/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
    colorScheme: {
      description: 'Global color scheme',
      defaultValue: 'blue',
      toolbar: {
        title: 'Color',
        icon: 'paintbrush',
        items: ['blue', 'green', 'purple'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
    colorScheme: 'blue',
  },
};

// TODO: Define theme strategy for token use
// document.querySelector("html")?.setAttribute("data-theme", "bleu_iceberg");
// document.querySelector("html")?.setAttribute("data-mode", "light");

export default preview;