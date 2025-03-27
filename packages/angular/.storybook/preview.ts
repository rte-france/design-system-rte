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

// TODO: Define theme strategy for token use
document.querySelector("html")?.setAttribute("data-theme", "bleu_iceberg");
document.querySelector("html")?.setAttribute("data-mode", "light");

export default preview;