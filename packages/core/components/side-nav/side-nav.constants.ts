import { DividerAppearance } from "../divider/divider.interface";

import { SideNavAppearance, SideNavSize } from "./side-nav.interface";

export const sideNavCollapsedSize: number = 64;

export const sideNavPanelSize: Record<SideNavSize, number> = {
  s: 224,
  m: 320,
  l: 504,
};

export const dividerAppearanceBySideNavAppearance: Record<SideNavAppearance, DividerAppearance> = {
  neutral: "default",
  brand: "brand-navigation",
};
