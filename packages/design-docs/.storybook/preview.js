/** @type { import('@storybook/react').Preview } */

const preview = {
  globalTypes: {
    color: {
      name: 'Color',
      description: 'Couleur globale pour les composants',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'blue', title: 'Blue' },
          { value: 'green', title: 'Green' },
          { value: 'purple', title: 'Purple' },
        ],
        showName: true,
      },
    },
    theme: {
      name: 'Theme',
      description: 'Thème global pour les composants',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        showName: true,
      },
    },
  },
  initialGlobals: {
    color: 'blue',
    theme: 'light',
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }
};

export default preview;