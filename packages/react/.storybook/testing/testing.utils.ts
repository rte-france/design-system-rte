import { waitFor, within } from "@storybook/test";

export const focusElementBeforeComponent = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  await waitFor(() => {
    const modeSwitcher = canvas.getByTestId("mode-switcher");
    modeSwitcher.focus();
  });
};
