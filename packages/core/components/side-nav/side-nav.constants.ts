import { DividerAppearance } from "../divider/divider.interface";

import { SideNavAppearance, SideNavProps } from "./side-nav.interface";

export const sideNavCollapsedSize: number = 64;

export const sideNavPanelSize: Record<SideNavProps["size"], number> = {
  s: 224,
  m: 320,
  l: 504,
};

export const dividerAppearanceBySideNavAppearance: Record<SideNavAppearance, DividerAppearance> = {
  neutral: "default",
  brand: "brand-navigation",
};
