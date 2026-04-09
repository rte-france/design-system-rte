import { Injectable } from "@angular/core";
import {
  DATEPICKER_MENU_FOOTER_TAB_KEYS,
  DATEPICKER_MENU_HEADER_TAB_KEYS_COMPACT,
  DATEPICKER_TAB_DATA,
  type DatepickerCalendarType,
  type DatepickerTabDataKey,
  getDatepickerMenuRestTabKeysInOrder,
  resolveDatepickerMenuFocusableElement,
} from "@design-system-rte/core/components/datepicker";

const DATEPICKER_MENU_GRID_SELECTORS = {
  dayGrid: ".rte-datepicker-day-grid",
  dayCell: ".day-cell",
  monthGrid: ".rte-datepicker-month-grid",
  monthCell: ".month-cell",
  yearGrid: ".rte-datepicker-year-grid",
  yearCell: ".year-cell",
  activeCell: '[data-datepicker-active="true"]',
  notDisabled: ":not([disabled])",
} as const;

function buildActiveDatepickerCellSelector(calendarType: DatepickerCalendarType): string {
  const { dayGrid, dayCell, monthGrid, monthCell, yearGrid, yearCell, activeCell, notDisabled } =
    DATEPICKER_MENU_GRID_SELECTORS;
  if (calendarType === "day") {
    return `${dayGrid} ${dayCell}${activeCell}${notDisabled}`;
  }
  if (calendarType === "month") {
    return `${monthGrid} ${monthCell}${activeCell}${notDisabled}`;
  }
  return `${yearGrid} ${yearCell}${activeCell}${notDisabled}`;
}

function resolveTabDataKeysToFocusables(
  menuHost: HTMLElement,
  tabDataKeys: readonly DatepickerTabDataKey[],
): HTMLElement[] {
  return tabDataKeys
    .map((tabDataKey) => menuHost.querySelector(`[data-datepicker-tab="${DATEPICKER_TAB_DATA[tabDataKey]}"]`))
    .filter((element): element is HTMLElement => element instanceof HTMLElement)
    .map(resolveDatepickerMenuFocusableElement);
}

@Injectable()
export class DatepickerMenuService {
  collectDatepickerMenuTabOrder(menuHost: HTMLElement, calendarType: DatepickerCalendarType): HTMLElement[] {
    const activeCellSelector = buildActiveDatepickerCellSelector(calendarType);
    const activeCell = menuHost.querySelector(activeCellSelector) as HTMLElement | null;

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

  getInitialFocusIndexForMenu(
    menuHost: HTMLElement,
    calendarType: DatepickerCalendarType,
    orderedFocusables: HTMLElement[],
  ): number {
    if (calendarType === "day") {
      return 0;
    }
    const activeCellSelector = buildActiveDatepickerCellSelector(calendarType);
    const activeCell = menuHost.querySelector(activeCellSelector) as HTMLElement | null;
    if (!activeCell) {
      return 0;
    }
    const index = orderedFocusables.indexOf(activeCell);
    return index >= 0 ? index : 0;
  }
}
