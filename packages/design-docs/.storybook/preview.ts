import "../src/styles/CodeBlocks.css";

/** @type { import('@storybook/react').Preview } */
import { addons } from "@storybook/preview-api";

import "./preview.scss";

const preview = {
  globalTypes: {
    color: {
      name: "Color",
      description: "Couleur globale pour les composants",
      toolbar: {
        icon: "paintbrush",
        title: "Color",
        items: [
          { value: "bleu_iceberg", title: "bleu_iceberg" },
          { value: "vert_foret", title: "vert_foret" },
          { value: "violet", title: "violet" },
        ],
        showName: true,
      },
    },
    theme: {
      name: "Theme",
      description: "Thème global pour les composants",
      toolbar: {
        icon: "circlehollow",
        title: "Theme",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        showName: true,
      },
    },
    modeDev: {
      name: "Mode Dev",
      description: "Mode Dev pour les composants",
      toolbar: {
        icon: "eye",
        title: "Vue",
        items: [
          { value: "utilisateur", right: "hide stories", title: "Utilisateur" },
          { value: "dev", right: "show stories", title: "Dev" },
        ],
        showName: true,
      },
    },
  },
  initialGlobals: {
    color: "bleu_iceberg",
    theme: "light",
    modeDev: "utilisateur",
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    docs: {
      toc: {
        headingSelector: "h2",
        disable: false,
      },
    },
    options: {
      storySort: {
        order: [
          "Design system",
          [
            "Acceuil",
            "Get Started - Kit de démarrage",
            ["Angular", "React"],
            "Get Started - Kit de migration",
            ["Général", "Pour les designers", "Angular", "React"],
            "Get Started - Contribuer",
            ["Gouvernance", "Évolutions et nouveaux composants", "Bugs et Anomalies", "Icônes"],
          ],
          "Guidelines",
          "Fondations",
        ],
        locales: "fr-FR",
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
