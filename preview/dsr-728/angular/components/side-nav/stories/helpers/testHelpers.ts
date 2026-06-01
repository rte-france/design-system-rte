import { within } from "@storybook/test";

function getCanvasAndSideNav(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);
  const sideNav = canvas.getByRole("navigation");
  return { canvas, sideNav };
}

function waitDelay(delay: number = 200): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export { getCanvasAndSideNav, waitDelay };
