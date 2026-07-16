import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import localeFr from "@angular/common/locales/fr";
import { Component, importProvidersFrom } from "@angular/core";
import { provideRouter, withHashLocation } from "@angular/router";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { applicationConfig, type Preview, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";

import "@design-system-rte/core/css/rte-fonts.css";

import docJson from "../documentation.json";

import { ThemeSelectorComponent } from "./template/theme-selector/theme-selector.component";
setCompodocJson(docJson);

registerLocaleData(localeFr);

@Component({
  standalone: true,
  template: "",
})
class StorybookEmptyRouteComponent {}

const decorators = [
  applicationConfig({
    providers: [
      provideRouter([{ path: "**", component: StorybookEmptyRouteComponent }], withHashLocation()),
      importProvidersFrom(HttpClientModule),
    ],
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
    composed: {
      remoteId: "angular",
    },
  },
  decorators: [
    ...decorators,
    componentWrapperDecorator(
      (story) => {
        return `
          <div style="padding: 16px 16px 80px 50px; background-color: var(--background-default); width: auto; height: 100%; display: flex; flex-direction: column; gap: 96px;">
            <rte-theme-selector/>
            <div [style.margin]="isGridStory ? '0' : 'auto'">
              ${story}
            </div>
          </div>
        `;
      },
      ({ title }) => {
        const isGridStory = title?.includes("/Grid") === true;

        return {
          isGridStory,
        };
      },
    ),
  ],
};

document.querySelector("html")?.setAttribute("data-theme", "bleu_iceberg");
document.querySelector("html")?.setAttribute("data-mode", "light");

export default preview;
