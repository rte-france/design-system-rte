import "../src/styles/CodeBlocks.css";

/** @type { import('@storybook/react').Preview } */
import "./preview.scss";

const preview = {
  globalTypes: {
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
            "Accueil",
            "Luciole",
            "Get Started - Kit de démarrage",
            ["Design", "Angular", "React"],
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

document.querySelector("html")?.setAttribute("data-theme", "bleu_iceberg");
document.querySelector("html")?.setAttribute("data-mode", "light");

export default preview;
