
import { addons } from '@storybook/manager-api';
import { customThemes } from './customTheme';zz


function applyTheme(themeName) {
    if (!customThemes[themeName]) {
        themeName = 'lightblue';
    }

    try {
        const theme = customThemes[themeName];

        addons.setConfig({
            theme
        });

        document.documentElement.setAttribute('data-theme', themeName);

        localStorage.setItem('storybook-applied-theme', themeName);
    } catch (e) {
    }
}

const savedTheme = localStorage.getItem('storybook-theme') || 'lightblue';
applyTheme(savedTheme);

window.addEventListener('message', (event) => {
    try {
        const parsedData = JSON.parse(event.data);

        if (
            parsedData &&
            parsedData.event.args[0].userGlobals.theme
        ) {
            const newTheme = parsedData.event.args[0].userGlobals.theme;
            applyTheme(newTheme);
        }
    } catch (e) {
    }
});