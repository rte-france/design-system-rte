export function buildHeaderHomeAriaLabel(applicationName: string): string {
  return `Accueil — ${applicationName}`;
}

export type ScrollDirection = "up" | "down";

export interface ScrollDirectionState {
  lastScrollY: number;
  lastDirection: ScrollDirection;
}

export function resolveScrollDirection(
  state: ScrollDirectionState,
  nextScrollY: number,
  thresholdPx = 0,
): ScrollDirectionState {
  const delta = nextScrollY - state.lastScrollY;
  if (Math.abs(delta) <= thresholdPx) {
    return { ...state, lastScrollY: nextScrollY };
  }

  const nextDirection: ScrollDirection = delta > 0 ? "down" : "up";
  return {
    lastScrollY: nextScrollY,
    lastDirection: nextDirection,
  };
}
