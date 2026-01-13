import { within } from '@storybook/test';
declare function getCanvasAndSideNav(canvasElement: HTMLElement): {
    canvas: ReturnType<typeof within>;
    sideNav: HTMLElement;
};
declare function waitForTooltip(delay?: number): Promise<void>;
export { getCanvasAndSideNav, waitForTooltip };
