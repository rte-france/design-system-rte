import type { ButtonAppearance, ButtonHierarchy, ButtonSize } from "../common/common-button";

export interface ButtonFigmaMainGridSection {
  key: string;
  title: string;
  appearance: ButtonAppearance;
  isCritical: boolean;
  hierarchies?: readonly ButtonHierarchy[];
}

export const BUTTON_FIGMA_GRID_SIZE: ButtonSize = "m";

export const BUTTON_FIGMA_GRID_HIERARCHIES: readonly ButtonHierarchy[] = [
  "primary",
  "secondary",
  "text",
  "transparent",
];

export const BUTTON_FIGMA_GRID_SIZE_LABELS: Record<ButtonSize, string> = {
  s: "Label Small",
  m: "Label Medium",
  l: "Label Large",
};

export const BUTTON_FIGMA_MAIN_GRID_SECTIONS: readonly ButtonFigmaMainGridSection[] = [
  {
    key: "brand",
    title: "Brand",
    appearance: "brand",
    isCritical: false,
  },
  {
    key: "brand-critical",
    title: "Critical",
    appearance: "brand",
    isCritical: true,
    hierarchies: ["primary"],
  },
  {
    key: "neutral",
    title: "Neutral",
    appearance: "neutral",
    isCritical: false,
  },
];

export interface ButtonFigmaReversedRow {
  size: ButtonSize;
  appearance: ButtonAppearance;
  hierarchy: ButtonHierarchy;
  isCritical: boolean;
  rowLabel: string;
}

export const BUTTON_FIGMA_REVERSED_ROWS: readonly ButtonFigmaReversedRow[] = [
  {
    size: BUTTON_FIGMA_GRID_SIZE,
    appearance: "brand",
    hierarchy: "transparent",
    isCritical: false,
    rowLabel: "Reversed",
  },
  {
    size: BUTTON_FIGMA_GRID_SIZE,
    appearance: "neutral",
    hierarchy: "primary",
    isCritical: false,
    rowLabel: "Neutral reversed",
  },
];

export function buttonFigmaSectionSupportsHierarchy(
  section: ButtonFigmaMainGridSection,
  hierarchy: ButtonHierarchy,
): boolean {
  if (!section.hierarchies) {
    return true;
  }

  return section.hierarchies.includes(hierarchy);
}
