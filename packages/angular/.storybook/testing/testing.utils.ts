import { waitFor, within } from "@storybook/test";

export const focusElementBeforeComponent = async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  await waitFor(() => {
    const modeSwitcher = within(canvas.getByTestId("mode-switcher")).getByRole("button");
    modeSwitcher.focus();
  });
};
