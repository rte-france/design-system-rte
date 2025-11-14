import { within } from "@storybook/test";

function getCanvasAndSideNav(canvasElement: HTMLElement): { canvas: ReturnType<typeof within>; sideNav: HTMLElement } {
  const canvas = within(canvasElement);
  const sideNav = canvas.getByRole("navigation");
  return { canvas, sideNav };
}

function waitForTooltip(delay: number = 200): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export { getCanvasAndSideNav, waitForTooltip };
