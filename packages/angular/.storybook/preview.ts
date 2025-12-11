import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { applicationConfig, type Preview, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";

import docJson from "../documentation.json";

import { ThemeSelectorComponent } from "./template/ThemeSelector/theme-selector.component";
setCompodocJson(docJson);

const decorators = [
  applicationConfig({
    providers: [importProvidersFrom(HttpClientModule)],
  }),
  moduleMetadata({
    imports: [ThemeSelectorComponent],
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
    options: {
      storySort: {
        order: ["Composants"],
        method: "alphabetical",
        locales: "fr-FR",
      },
    },
  },
  decorators: [
    ...decorators,
    componentWrapperDecorator(
      (story) => `
        <div style="padding: 16px 16px 80px 50px; background-color: var(--background-default); width: auto; height: 100%; display: flex; flex-direction: column; gap: 96px;">
          <rte-theme-selector/>
          <div style="margin: auto;">
            ${story}
          </div>
        </div>
      `,
    ),
  ],
};

document.querySelector("html")?.setAttribute("data-theme", "bleu_iceberg");
document.querySelector("html")?.setAttribute("data-mode", "light");

export default preview;
