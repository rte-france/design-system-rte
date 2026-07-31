import {
  DYNAMIC_TAB_ACTION_BUTTONS_WIDTH,
  DYNAMIC_TAB_CREATE_WIDTH,
  DYNAMIC_TAB_ITEM_SMALL_WIDTH,
  DYNAMIC_TAB_ITEM_XSMALL_WIDTH,
  DYNAMIC_TAB_KEYBOARD_REORDER_EASING,
  DYNAMIC_TAB_KEYBOARD_REORDER_TRANSITION_MS,
  DYNAMIC_TAB_MIN_WIDTH,
} from "./dynamic-tab.constants";
import { DynamicTabItemOption } from "./dynamic-tab.interface";

const generateUniqueId = (): string => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

export interface DynamicTabLayoutResult {
  maxVisibleTabs: number;
  hasOverflow: boolean;
  tabWidth: number;
}

export interface TabItemDisplayState {
  shouldDisplayBadge: boolean;
  shouldDisplayIcon: boolean;
  shouldDisplayText: boolean;
  shouldDisplayCloseButton: boolean;
  isZeroToExtraSmall: boolean;
}

export interface TabItemDisplayInput {
  isActive: boolean;
  hasBadge: boolean;
  iconName?: string;
  isClosable: boolean;
}

export type TabDirection = "next" | "previous";

export const buildNewTab = (
  newTabConfig: DynamicTabItemOption | undefined,
  existingOptions: DynamicTabItemOption[],
): DynamicTabItemOption | null => {
  if (!newTabConfig) {
    return null;
  }

  const hasDuplicateId = existingOptions.some((option) => option.id === newTabConfig.id);
  const { id } = newTabConfig;

  return {
    ...newTabConfig,
    id: hasDuplicateId ? `${id}-${generateUniqueId()}` : id,
  };
};

export const computeVisibleTabCount = (containerWidth: number, totalTabs: number): DynamicTabLayoutResult => {
  if (!containerWidth) {
    return { maxVisibleTabs: totalTabs, hasOverflow: false, tabWidth: DYNAMIC_TAB_MIN_WIDTH };
  }

  const availableWidthForTabs = containerWidth - DYNAMIC_TAB_ACTION_BUTTONS_WIDTH;
  const maxVisibleTabs = Math.max(1, Math.floor(availableWidthForTabs / DYNAMIC_TAB_MIN_WIDTH));
  const visibleCount = Math.min(totalTabs, maxVisibleTabs);
  const hasOverflow = totalTabs > maxVisibleTabs;
  const actionWidth = hasOverflow ? DYNAMIC_TAB_ACTION_BUTTONS_WIDTH : DYNAMIC_TAB_CREATE_WIDTH;
  const tabWidth = visibleCount ? (containerWidth - actionWidth) / visibleCount : DYNAMIC_TAB_MIN_WIDTH;

  return { maxVisibleTabs, hasOverflow, tabWidth };
};

export const ensureSelectedTabVisible = (
  options: DynamicTabItemOption[],
  selectedTabId: string | undefined,
  maxVisibleTabs: number,
): DynamicTabItemOption[] => {
  if (!selectedTabId || options.length <= maxVisibleTabs) {
    return options;
  }

  const lastVisibleTabIndex = maxVisibleTabs - 1;
  const firstPart = options.slice(0, lastVisibleTabIndex);
  const secondPart = options.slice(lastVisibleTabIndex);
  const selectedTab = options.find((option) => option.id === selectedTabId);

  if (!selectedTab || !secondPart.includes(selectedTab)) {
    return options;
  }

  const newVisibleTabs = [...firstPart, selectedTab];
  const newHiddenTabs = secondPart.filter((tab) => tab.id !== selectedTab.id);

  return [...newVisibleTabs, ...newHiddenTabs];
};

export const formatHiddenTabsLabel = (count: number): string => `+ ${count} onglet${count > 1 ? "s" : ""}`;

export const getSelectedTabIdAfterClose = (
  options: DynamicTabItemOption[],
  closingTabId: string,
): string | undefined => {
  const closingIndex = options.findIndex((option) => option.id === closingTabId);

  if (closingIndex !== -1 && options.length > 1) {
    return closingIndex === options.length - 1 ? options[closingIndex - 1].id : options[closingIndex + 1].id;
  }
};

export const removeTab = (options: DynamicTabItemOption[], tabId: string): DynamicTabItemOption[] =>
  options.filter((option) => option.id !== tabId);

export const updateTabTitle = (options: DynamicTabItemOption[], tabId: string, title: string): DynamicTabItemOption[] =>
  options.map((option) => (option.id === tabId ? { ...option, title } : option));

export const reorderOptionsSlice = (
  options: DynamicTabItemOption[],
  fromIndex: number,
  toIndex: number,
  visibleCount: number,
): DynamicTabItemOption[] => {
  const updatedOptions = [...options];
  const visibleSlice = updatedOptions.splice(0, visibleCount);
  const [moved] = visibleSlice.splice(fromIndex, 1);
  visibleSlice.splice(toIndex, 0, moved);

  return [...visibleSlice, ...updatedOptions];
};

export const resolveCommittedTitle = (input: string, previousTitle: string): { title: string; changed: boolean } => {
  const trimmedTitle = input.trim();

  if (trimmedTitle === "") {
    return { title: previousTitle, changed: false };
  }

  return { title: trimmedTitle, changed: trimmedTitle !== previousTitle };
};

export const computeTabItemDisplayState = (width: number, input: TabItemDisplayInput): TabItemDisplayState => {
  const { isActive, hasBadge, iconName, isClosable } = input;
  const isZeroToExtraSmall = width <= DYNAMIC_TAB_ITEM_XSMALL_WIDTH;
  const isExtraSmallToSmall = width > DYNAMIC_TAB_ITEM_XSMALL_WIDTH && width <= DYNAMIC_TAB_ITEM_SMALL_WIDTH;
  const isSmallOrMore = width > DYNAMIC_TAB_ITEM_SMALL_WIDTH;

  const shouldDisplayBadge = hasBadge && (!isZeroToExtraSmall || !isActive);
  const shouldDisplayIcon = !!iconName && (isActive ? isSmallOrMore : !isZeroToExtraSmall || !hasBadge);
  const shouldDisplayText = isExtraSmallToSmall || isSmallOrMore;
  const shouldDisplayCloseButton =
    isClosable && (isSmallOrMore || ((isZeroToExtraSmall || isExtraSmallToSmall) && isActive));

  return {
    shouldDisplayBadge,
    shouldDisplayIcon,
    shouldDisplayText,
    shouldDisplayCloseButton,
    isZeroToExtraSmall,
  };
};

export const getAdjacentTabIndex = (
  currentIndex: number,
  direction: TabDirection,
  length: number,
  options: { wrap: boolean } = { wrap: true },
): number => {
  const delta = direction === "next" ? 1 : -1;
  const nextIndex = currentIndex + delta;

  if (options.wrap) {
    return (nextIndex + length) % length;
  }

  return Math.max(0, Math.min(length - 1, nextIndex));
};

export const getReorderIndex = (currentIndex: number, direction: TabDirection, length: number): number | null => {
  const nextIndex = currentIndex + (direction === "next" ? 1 : -1);

  if (nextIndex < 0 || nextIndex >= length) {
    return null;
  }

  return nextIndex;
};

export class SpaceMoveModeState {
  private suppressSpaceMoveEnter = false;

  shouldEnterOnKeyup(): boolean {
    if (this.suppressSpaceMoveEnter) {
      this.suppressSpaceMoveEnter = false;
      return false;
    }

    return true;
  }

  suppressAndExit(): void {
    this.suppressSpaceMoveEnter = true;
  }
}

export const captureTabPositions = (listElement: HTMLElement): Map<string, DOMRect> => {
  const positions = new Map<string, DOMRect>();

  listElement.querySelectorAll('[role="tab"]').forEach((element) => {
    const tabId = element.getAttribute("data-tab-id");

    if (tabId) {
      positions.set(tabId, element.getBoundingClientRect());
    }
  });

  return positions;
};

export const playFlipReorderAnimation = (
  listElement: HTMLElement,
  firstPositions: Map<string, DOMRect>,
  options: { durationMs?: number; easing?: string } = {},
): void => {
  const durationMs = options.durationMs ?? DYNAMIC_TAB_KEYBOARD_REORDER_TRANSITION_MS;
  const easing = options.easing ?? DYNAMIC_TAB_KEYBOARD_REORDER_EASING;
  const transition = `transform ${durationMs}ms ${easing}`;
  const tabs = Array.from(listElement.querySelectorAll('[role="tab"]')) as HTMLElement[];

  tabs.forEach((tab) => {
    const tabId = tab.getAttribute("data-tab-id");
    const firstPosition = tabId ? firstPositions.get(tabId) : null;

    if (firstPosition) {
      const deltaX = firstPosition.left - tab.getBoundingClientRect().left;

      if (deltaX !== 0) {
        tab.style.transform = `translate3d(${deltaX}px, 0, 0)`;
        tab.style.transition = "none";
      }
    }
  });

  requestAnimationFrame(() => {
    tabs.forEach((tab) => {
      if (tab.style.transform) {
        tab.style.transition = transition;
        tab.style.transform = "";
      }
    });

    window.setTimeout(() => {
      tabs.forEach((tab) => {
        tab.style.transition = "";
        tab.style.transform = "";
      });
    }, durationMs);
  });
};

export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
