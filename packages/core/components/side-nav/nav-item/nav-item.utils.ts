import { IconSize } from "@design-system-rte/core/components/icon/icon.constants";

export function getNavItemLabelIconSize(isNested = false, isCollapsed = false): number {
  if (isNested) {
    return IconSize.s;
  }
  return isCollapsed ? IconSize.l : IconSize.m;
}
