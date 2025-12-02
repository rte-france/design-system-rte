import { addons } from "@storybook/manager-api";

import { customThemes } from "./customTheme";
import DISPLAY_CONFIG from "./displayConfig.json";

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

function _hideStories(storySections: Record<string, string[]>): void {
  if (!Object.keys(storySections).length) {
    return;
  }

  const selectors = Object.entries(storySections)
    .filter(([storySection, stories]) => storySection && stories.length)
    .map(([storySection, stories]) => _extractStorySelectorsFromSection({ sectionId: storySection, stories }))
    .join(", ");

  if (!selectors.length) {
    return;
  }

  const styleId = "hidden-stories-style";
  let styleElement = document.getElementById(styleId) as HTMLStyleElement | null;

  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }

  styleElement.textContent = `${selectors} { display: none !important; }`;
}

function _extractStorySelectorsFromSection(storySection: { sectionId: string; stories: string[] }): string[] {
  return storySection.stories.map(
    (story) => `
      #storybook-explorer-tree [data-item-id="${storySection.sectionId}-${story}"],
      #storybook-explorer-tree [data-item-id="${storySection.sectionId}-${story}--docs"]
    `,
  );
}

function _hideSections(sections: string[]): void {
  if (!sections.length) {
    return;
  }

  const selectors = sections.map((section) => `#storybook-explorer-tree [data-item-id="${section}"]`).join(", ");

  const styleId = "hidden-sections-style";
  let styleElement = document.getElementById(styleId) as HTMLStyleElement | null;
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }

  styleElement.textContent = `${selectors} { display: none !important; }`;
}

if (DISPLAY_CONFIG.hiddenStories) {
  _hideStories(DISPLAY_CONFIG.hiddenStories);
}

if (DISPLAY_CONFIG.hiddenSections) {
  _hideSections(DISPLAY_CONFIG.hiddenSections);
}

function _hideCategoryTitle(category: string): void {
  const styleId = `hidden-${category}-style`;
  let styleElement = document.getElementById(styleId) as HTMLStyleElement | null;
  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }
  styleElement.textContent = `#${category} { display: none !important; }`;
}

_hideCategoryTitle("angular_composants");
_hideCategoryTitle("react_composants");
