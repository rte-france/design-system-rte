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
  globalTypes: {},
  initialGlobals: {
    mode: "light",
    theme: "bleu_iceberg",
  },
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
        <div *ngIf="isStory">
          <rte-theme-selector />
          </div>
          
          <div
            style="background-color: var(--background-default); padding: 24px; height: 100%; align-content: center; width: auto; overflow: scroll;"
            
            [style.margin-top]="isStory ? '180px' : '0'"
          >
            <div
            [style.margin]="hasTopBottomMargins ? 'auto 0' : hasAutoMargins ? 'auto' : '0'"
            [style.width]="hasAutoMargins ? 'fit-content' : '100%'"
            >
              ${story}
            </div>
          </div>
        `;
      },
      ({ context }) => {
        const noAutoMarginStoriesIds = ["composants-header", "sidenav"];
        const topBottomMarginStoriesIds = ["composants-grid"];

        const hasAutoMargins = !noAutoMarginStoriesIds.some((id) => context?.id?.includes(id));
        const hasTopBottomMargins = topBottomMarginStoriesIds.some((id) => context?.id?.includes(id));

        return {
          hasAutoMargins,
          hasTopBottomMargins,
          isStory: context?.viewMode === "story",
        };
      },
    ),
  ],
};

document.documentElement.setAttribute("data-theme", "bleu_iceberg");
document.documentElement.setAttribute("data-mode", "light");

export default preview;
