import { useGlobals } from "@storybook/preview-api";
import type { Preview } from "@storybook/react";
import "@design-system-rte/react/style.css";
import "@design-system-rte/core/css/rte-fonts.css";

import "./preview.scss";

import { FrameworkProvider } from "../../design-docs/src/components/ComponentDocs/FrameworkContext";

import ThemeSelector from "./template/ThemeSelector/ThemeSelector";

export const decorators: Preview["decorators"] = [
  (Story, context) => {
    const [globals] = useGlobals();
    const framework = (globals?.framework as "angular" | "react") || "react";

    return (
      <FrameworkProvider framework={framework}>
        <div
          style={{
            padding: "16px 16px 80px 50px",
            backgroundColor: "var(--background-default)",
            width: "auto",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "96px",
          }}
        >
          <ThemeSelector />
          <div
            style={{
              margin: "auto",
            }}
          >
            <Story {...context} />
          </div>
        </div>
      </FrameworkProvider>
    );
  },
];

const preview: Preview = {
  decorators: decorators,
  globalTypes: {
    framework: {
      name: "Framework",
      description: "Framework context for documentation",
      defaultValue: "react",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "angular", title: "Angular" },
          { value: "react", title: "React" },
        ],
        showName: false,
      },
    },
  },
  initialGlobals: {
    framework: "react",
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
  },
};

document.querySelector("html")?.setAttribute("data-theme", "bleu_iceberg");
document.querySelector("html")?.setAttribute("data-mode", "light");

export default preview;
