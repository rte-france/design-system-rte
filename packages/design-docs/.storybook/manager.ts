import { addons } from "@storybook/manager-api";

import { customThemes } from "./customTheme";

function applyTheme(themeName = "bleu_iceberg_light"): void {
  try {
    const theme = customThemes[themeName];

    addons.setConfig({ theme });

    document.documentElement.setAttribute("data-theme", themeName);

    localStorage.setItem("storybook-applied-theme", themeName);
  } catch (e) {
    console.error(`Error applying theme: ${e.message}`);
  }
}

applyTheme();

function hideCategoryTitle(category: string): void {
  const styleId = `hidden-${category}-style`;
  let styleElement = document.getElementById(styleId) as HTMLStyleElement | null;
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }
  styleElement.textContent = `#${category} { display: none !important; }`;
}

hideCategoryTitle("angular_composants");
hideCategoryTitle("react_composants");
