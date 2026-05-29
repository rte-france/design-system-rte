import { DividerAppearance } from "../divider/divider.interface";

import type { SideNavAppearance, SideNavContrast, SideNavSize } from "./side-nav.interface";

export const sideNavCollapsedSize: number = 64;

export const sideNavPanelSize: Record<SideNavSize, number> = {
  s: 224,
  m: 320,
  l: 504,
};

type SideNavThemeKey = `${SideNavAppearance}-${SideNavContrast}`;

export const dividerAppearanceBySideNavTheme: Record<SideNavThemeKey, DividerAppearance> = {
  "neutral-low": "default",
  "neutral-high": "inverse",
  "brand-low": "brand",
  "brand-high": "inverse",
};

export function getDividerAppearanceBySideNavTheme(
  appearance: SideNavAppearance,
  contrast: SideNavContrast,
): DividerAppearance {
  const themeKey: SideNavThemeKey = `${appearance}-${contrast}`;
  return dividerAppearanceBySideNavTheme[themeKey];
}
