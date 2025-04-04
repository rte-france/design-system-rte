import type { Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

window.addEventListener('message', (event) => {
  try {
      const parsedData = JSON.parse(event.data);
      const globals = parsedData?.event.args[0].userGlobals

      document.querySelector("html")?.setAttribute("data-mode", globals.theme);

  } catch (e) {
  }
});

// TODO: Define theme strategy for token use
document.querySelector("html")?.setAttribute("data-theme", "vert_foret");
document.querySelector("html")?.setAttribute("data-mode", "light");

export default preview;