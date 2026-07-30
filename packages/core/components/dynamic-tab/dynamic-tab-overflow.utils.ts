import {
  DYNAMIC_TAB_ACTION_BUTTONS_WIDTH,
  DYNAMIC_TAB_CREATE_WIDTH,
  DYNAMIC_TAB_MIN_WIDTH,
  DYNAMIC_TAB_WIDTH_RATIO,
} from "./dynamic-tab.constants";
import { DynamicTabItemOption } from "./dynamic-tab.interface";

export interface DynamicTabLayoutResult {
  maxVisibleTabs: number;
  hasOverflow: boolean;
  tabWidth: number;
}

export const computePreferredTabWidth = (containerWidth: number): number =>
  Math.max(DYNAMIC_TAB_MIN_WIDTH, containerWidth * DYNAMIC_TAB_WIDTH_RATIO);

export const computeVisibleTabCount = (containerWidth: number, totalTabs: number): DynamicTabLayoutResult => {
  const preferredWidth = computePreferredTabWidth(containerWidth);

  if (totalTabs === 0) {
    return { maxVisibleTabs: 0, hasOverflow: false, tabWidth: preferredWidth };
  }

  const spaceForTabsWithCreateOnly = containerWidth - DYNAMIC_TAB_CREATE_WIDTH;

  if (totalTabs * preferredWidth + DYNAMIC_TAB_CREATE_WIDTH <= containerWidth) {
    return { maxVisibleTabs: totalTabs, hasOverflow: false, tabWidth: preferredWidth };
  }

  const equalShrunkWidth = spaceForTabsWithCreateOnly / totalTabs;

  if (equalShrunkWidth >= DYNAMIC_TAB_MIN_WIDTH) {
    return { maxVisibleTabs: totalTabs, hasOverflow: false, tabWidth: equalShrunkWidth };
  }

  const availableWithOverflow = containerWidth - DYNAMIC_TAB_ACTION_BUTTONS_WIDTH;
  const maxVisibleTabs = Math.max(1, Math.floor(availableWithOverflow / DYNAMIC_TAB_MIN_WIDTH));
  const visibleCount = Math.min(totalTabs, maxVisibleTabs);
  const tabWidth = availableWithOverflow / visibleCount;

  return {
    maxVisibleTabs: visibleCount,
    hasOverflow: totalTabs > visibleCount,
    tabWidth,
  };
};

export const promoteHiddenTab = (
  options: DynamicTabItemOption[],
  hiddenTabId: string,
  maxVisibleTabs: number,
): DynamicTabItemOption[] => {
  const hiddenIndex = options.findIndex((option) => option.id === hiddenTabId);

  if (hiddenIndex === -1 || hiddenIndex < maxVisibleTabs) {
    return options;
  }

  const lastVisibleIndex = maxVisibleTabs - 1;
  const updatedOptions = [...options];
  const hiddenTab = updatedOptions[hiddenIndex];
  const lastVisibleTab = updatedOptions[lastVisibleIndex];

  updatedOptions[lastVisibleIndex] = hiddenTab;
  updatedOptions[hiddenIndex] = lastVisibleTab;

  return updatedOptions;
};

export const ensureSelectedTabVisible = (
  options: DynamicTabItemOption[],
  selectedTabId: string | undefined,
  maxVisibleTabs: number,
): DynamicTabItemOption[] => {
  if (!selectedTabId) {
    return options;
  }

  const selectedIndex = options.findIndex((option) => option.id === selectedTabId);

  if (selectedIndex === -1 || selectedIndex < maxVisibleTabs) {
    return options;
  }

  return promoteHiddenTab(options, selectedTabId, maxVisibleTabs);
};

export const formatHiddenTabsLabel = (count: number): string => `+ ${count} onglet${count > 1 ? "s" : ""}`;

/** @deprecated Use computePreferredTabWidth */
export const computeTabWidth = computePreferredTabWidth;
