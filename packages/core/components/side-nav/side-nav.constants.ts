import { SideNavProps } from "./side-nav.interface";

export const sideNavCollapsedSize: number = 64;

export const sideNavPanelSize: Record<SideNavProps["size"], number> = {
  s: 224,
  m: 320,
  l: 504,
};
