import { addons } from '@storybook/manager-api';
import { purpleThemeLight } from './customTheme';

addons.setConfig({
    theme: purpleThemeLight,
});