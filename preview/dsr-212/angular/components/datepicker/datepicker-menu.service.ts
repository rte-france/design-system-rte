import { Injectable } from "@angular/core";
import {
  DATEPICKER_TAB_DATA,
  type DatepickerCalendarType,
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

@Injectable()
export class DatepickerMenuService {
  collectDatepickerMenuTabOrder(menuHost: HTMLElement, calendarType: DatepickerCalendarType): HTMLElement[] {
    const activeCellSelector = buildActiveDatepickerCellSelector(calendarType);
    const activeCell = menuHost.querySelector(activeCellSelector) as HTMLElement | null;

    const tabKeys = getDatepickerMenuRestTabKeysInOrder(calendarType);
    const rest = tabKeys.map((tabDataKey) =>
      menuHost.querySelector(`[data-datepicker-tab="${DATEPICKER_TAB_DATA[tabDataKey]}"]`),
    );

    const focusables = rest
      .filter((element): element is HTMLElement => element instanceof HTMLElement)
      .map(resolveDatepickerMenuFocusableElement);
    if (activeCell) {
      return [activeCell, ...focusables];
    }
    return focusables;
  }
}
