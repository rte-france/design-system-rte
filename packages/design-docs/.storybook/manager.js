import { addons } from '@storybook/manager-api';
import { customThemes } from './customTheme';

function applyTheme(themeName) {
    if (!customThemes[themeName]) {
        themeName = 'lightblue';
    }

    try {
        const theme = customThemes[themeName];

        addons.setConfig({ theme });

        document.documentElement.setAttribute('data-theme', themeName);

        localStorage.setItem('storybook-applied-theme', themeName);
    } catch (e) {
        console.error(`Error applying theme: ${e.message}`);
    }
}

applyTheme();

window.addEventListener('message', (event) => {
    try {
        const parsedData = JSON.parse(event.data);
        const globals = parsedData?.event.args[0].userGlobals

        const newTheme = `${globals.theme}${globals.color}`;
        applyTheme(newTheme);

    } catch (e) {
    }
});
