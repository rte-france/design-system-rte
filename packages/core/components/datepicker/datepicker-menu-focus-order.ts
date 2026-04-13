import {
  DATEPICKER_MENU_FOOTER_TAB_KEYS,
  DATEPICKER_MENU_HEADER_TAB_KEYS_COMPACT,
  DATEPICKER_TAB_DATA,
  type DatepickerTabDataKey,
} from "./datepicker.constants";
import type { DatepickerCalendarType } from "./datepicker.interface";
import { getDatepickerMenuRestTabKeysInOrder, resolveDatepickerMenuFocusableElement } from "./datepicker.utils";

function resolveTabDataKeysToFocusables(
  menuHost: HTMLElement,
  tabDataKeys: readonly DatepickerTabDataKey[],
): HTMLElement[] {
  return tabDataKeys
    .map((tabDataKey) => menuHost.querySelector(`[data-datepicker-tab="${DATEPICKER_TAB_DATA[tabDataKey]}"]`))
    .filter((element): element is HTMLElement => element instanceof HTMLElement)
    .map(resolveDatepickerMenuFocusableElement);
}

export function collectDatepickerMenuTabOrder(
  menuHost: HTMLElement,
  calendarType: DatepickerCalendarType,
  activeCell: HTMLElement | null,
): HTMLElement[] {
  if (calendarType === "day") {
    const tabKeys = getDatepickerMenuRestTabKeysInOrder(calendarType);
    const rest = resolveTabDataKeysToFocusables(menuHost, tabKeys);
    if (activeCell) {
      return [activeCell, ...rest];
    }
    return rest;
  }

  const headerFocusables = resolveTabDataKeysToFocusables(menuHost, DATEPICKER_MENU_HEADER_TAB_KEYS_COMPACT);
  const footerFocusables = resolveTabDataKeysToFocusables(menuHost, DATEPICKER_MENU_FOOTER_TAB_KEYS);
  if (activeCell) {
    return [...headerFocusables, activeCell, ...footerFocusables];
  }
  return [...headerFocusables, ...footerFocusables];
}

export function getDatepickerMenuInitialFocusIndex(
  calendarType: DatepickerCalendarType,
  orderedFocusables: HTMLElement[],
  activeCell: HTMLElement | null,
): number {
  if (calendarType === "day") {
    return 0;
  }
  if (!activeCell) {
    return 0;
  }
  const index = orderedFocusables.indexOf(activeCell);
  return index >= 0 ? index : 0;
}
