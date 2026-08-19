import { Title, Subtitle, Description, Primary, Controls, Stories } from "@storybook/blocks";
import { useGlobals } from "@storybook/preview-api";
import type { Preview } from "@storybook/react";

import { FrameworkProvider } from "../../design-docs/src/components/ComponentDocs/FrameworkContext";
import ThemeSelector from "../.storybook/template/ThemeSelector/ThemeSelector";
import "@design-system-rte/react/style.css";
import "@design-system-rte/core/css/rte-fonts.css";

import "./preview.scss";

export const decorators: Preview["decorators"] = [
  (Story, context) => {
    const isStory = context?.viewMode === "story";
    const [globals] = useGlobals();
    const framework = (globals?.framework as "angular" | "react") || "react";

    const noAutoMarginStoriesIds = ["composants-header", "sidenav"];
    const topBottomMarginStoriesIds = ["composants-grid"];

    const hasAutoMargins = !noAutoMarginStoriesIds.some((id) => context?.id?.includes(id));
    const hasTopBottomMargins = topBottomMarginStoriesIds.some((id) => context?.id?.includes(id));

    return (
      <>
        <FrameworkProvider framework={framework}>
          {isStory && <ThemeSelector />}
          <div
            style={{
              backgroundColor: "var(--background-default)",
              marginTop: isStory ? "180px" : "0",
              padding: "24px",
              height: "100%",
              alignContent: "center",
              width: "auto",
              overflow: "scroll",
            }}
          >
            <div
              style={{
                margin: hasTopBottomMargins ? "auto 0" : hasAutoMargins ? "auto" : "0",
                width: hasAutoMargins ? "fit-content" : "100%",
              }}
            >
              <Story {...context} />
            </div>
          </div>
        </FrameworkProvider>
      </>
    );
  },
];

const preview: Preview = {
  decorators: decorators,
  globalTypes: {},
  initialGlobals: {
    framework: "react",
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
      remoteId: "react",
    },
    docs: {
      page: () => (
        <>
          <ThemeSelector />
          <div style={{ marginTop: "50px" }}>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Controls />
            <Stories />
          </div>
        </>
      ),
    },
  },
};

document.querySelector("html")?.setAttribute("data-theme", "bleu_iceberg");
document.querySelector("html")?.setAttribute("data-mode", "light");

export default preview;
