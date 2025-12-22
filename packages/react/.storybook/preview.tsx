import type { Preview } from "@storybook/react";
import "@design-system-rte/react/style.css";
import "@design-system-rte/core/css/rte-fonts.css";

import "./preview.scss";

import ThemeSelector from "./template/ThemeSelector/ThemeSelector";

export const decorators: Preview["decorators"] = [
  (Story, context) => (
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
  ),
];

const preview: Preview = {
  decorators: decorators,
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
};

document.querySelector("html")?.setAttribute("data-theme", "bleu_iceberg");
document.querySelector("html")?.setAttribute("data-mode", "light");

export default preview;
