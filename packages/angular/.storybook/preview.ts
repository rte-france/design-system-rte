import type { Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

import { addons } from '@storybook/preview-api';

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

addons.getChannel().on('THEME_CHANGED', (theme) => {
  document.querySelector("html")?.setAttribute("data-mode", theme.theme);
  document.querySelector("html")?.setAttribute("data-theme", theme.color);
})

document.querySelector("html")?.setAttribute("data-theme", "bleu_iceberg");
document.querySelector("html")?.setAttribute("data-mode", "light");

export default preview;