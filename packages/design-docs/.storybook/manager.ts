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

window.addEventListener("message", (event) => {
  if (typeof event.data !== "string") {
    return;
  }

  const parsedData = JSON.parse(event.data);
  const globals = parsedData?.event.args[0].userGlobals;

  if (!globals?.theme || !globals?.color) {
    return;
  }

  const newTheme = `${globals.color}_${globals.theme}`;
  applyTheme(newTheme);
  _emitThemeChange(globals.theme, globals.color);
});

function _emitThemeChange(theme: string, color: string): void {
  addons.getChannel().emit("THEME_CHANGED", { theme, color });
}