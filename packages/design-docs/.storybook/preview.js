
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Thème global pour les composants',
    defaultValue: 'lightblue',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'lightblue', title: 'Light Blue' },
        { value: 'darkblue', title: 'Dark Blue' },
        { value: 'lightgreen', title: 'Light Green' },
        { value: 'darkgreen', title: 'Dark Green' },
        { value: 'lightpurple', title: 'Light Purple' },
        { value: 'darkpurple', title: 'Dark Purple' },
      ],
      showName: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};