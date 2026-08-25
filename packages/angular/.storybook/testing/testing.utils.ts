import { waitFor } from "@storybook/test";

export const focusElementBeforeComponent = async (canvasElement: HTMLElement) => {
  await waitFor(() => {
    const themeSelector = canvasElement.querySelector<HTMLElement>("rte-theme-selector [role='combobox']");
    if (!themeSelector) {
      throw new Error("Theme selector combobox not found");
    }
    themeSelector.focus();
  });
};
