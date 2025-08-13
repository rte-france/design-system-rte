import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { applicationConfig, type Preview, componentWrapperDecorator } from "@storybook/angular";
import { addons } from "@storybook/preview-api";

import docJson from "../documentation.json";
setCompodocJson(docJson);

const decorators = [
  applicationConfig({
    providers: [importProvidersFrom(HttpClientModule)],
  }),
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
  decorators: [
    ...decorators,
    componentWrapperDecorator((story) => `<div style="padding: 20px; background-color: var(--background-default); width: auto; height: 100%;">${story}</div>`),
  ],
};

addons.getChannel().on("THEME_CHANGED", (theme) => {
  document.querySelector("html")?.setAttribute("data-mode", theme.theme);
  document.querySelector("html")?.setAttribute("data-theme", theme.color);
});

document.querySelector("html")?.setAttribute("data-theme", "bleu_iceberg");
document.querySelector("html")?.setAttribute("data-mode", "light");

export default preview;
