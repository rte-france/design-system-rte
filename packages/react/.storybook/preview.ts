import { addons } from "@storybook/preview-api";
import type { Preview } from "@storybook/react";
import React from "react";

import "./preview.scss";

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(
        "div",
        { style: { padding: "50px", backgroundColor: "var(--background-default)", width: "auto", height: "100%" } },
        React.createElement(Story),
      ),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

addons.getChannel().on("THEME_CHANGED", (theme) => {
  document.querySelector("html")?.setAttribute("data-mode", theme.theme);
  document.querySelector("html")?.setAttribute("data-theme", theme.color);
});

document.querySelector("html")?.setAttribute("data-theme", "bleu_iceberg");
document.querySelector("html")?.setAttribute("data-mode", "light");

export default preview;
