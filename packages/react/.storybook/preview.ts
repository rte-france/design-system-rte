import type { Preview } from "@storybook/react";
import { addons } from "@storybook/preview-api";

import "./preview.scss";

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

addons.getChannel().on("THEME_CHANGED", (theme) => {
  document.querySelector("html")?.setAttribute("data-mode", theme.theme);
  document.querySelector("html")?.setAttribute("data-theme", theme.color);
});

document.querySelector('html')?.setAttribute('data-theme', 'bleu_iceberg');
document.querySelector('html')?.setAttribute('data-mode', 'light');

export default preview;
