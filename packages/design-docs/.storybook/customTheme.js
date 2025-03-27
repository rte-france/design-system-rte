import { create } from "@storybook/theming";

export const purpleThemeLight = create({
    base: 'light',
    colorPrimary: '#6a1b9a',
    colorSecondary: '#8e24aa',
    
    appBg: '#f3e5f5',
    appContentBg: '#ffffff',
    appBorderColor: '#e1bee7',
    appBorderRadius: 4,
    
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
    
    textColor: '#333333',
    textInverseColor: '#ffffff',
    textMutedColor: '#666666',
    
    barTextColor: '#333333',
    barSelectedColor: '#6a1b9a',
    barBg: '#ffffff',
    
    inputBg: '#ffffff',
    inputBorder: '#e1bee7',
    inputTextColor: '#333333',
  });