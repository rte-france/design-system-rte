/** @type { import('@storybook/react').Preview } */

const preview = {
  globalTypes: {
    color: {
      name: 'Color',
      description: 'Couleur globale pour les composants',
      toolbar: {
        icon: 'paintbrush',
        title: 'Color',
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
        title: 'Theme',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        showName: true,
      },
    },
    modeDev:{
      name: 'Mode Dev',
      description: 'Mode Dev pour les composants',
      toolbar: {
        icon: 'eye',
        title: 'Vue',
        items: [
          { value: 'utilisateur', right:'hide stories', title: 'Utilisateur' },
          { value: 'dev', right:'show stories', title: 'Dev' },
        ],
        showName: true,
      },
    },
  },
  initialGlobals: {
    color: 'blue',
    theme: 'light',
    modeDev: 'utilisateur',
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