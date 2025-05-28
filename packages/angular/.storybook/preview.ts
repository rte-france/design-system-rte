import { applicationConfig, type Preview } from '@storybook/angular'
import { importProvidersFrom } from '@angular/core'
import { HttpClientModule } from '@angular/common/http';

import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

import { addons } from "@storybook/preview-api";

const decorators = [
  applicationConfig({
    providers: [importProvidersFrom(HttpClientModule)]
  })
];
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: decorators,
};

addons.getChannel().on("THEME_CHANGED", (theme) => {
  document.querySelector("html")?.setAttribute("data-mode", theme.theme);
  document.querySelector("html")?.setAttribute("data-theme", theme.color);
});

document.querySelector("html")?.setAttribute("data-theme", "bleu_iceberg");
document.querySelector("html")?.setAttribute("data-mode", "light");

export default preview;
