import { Injectable } from "@angular/core";
import {
  collectDatepickerMenuTabOrder as collectDatepickerMenuTabOrderCore,
  getDatepickerMenuInitialFocusIndex,
  type DatepickerCalendarType,
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
    const activeCell = menuHost.querySelector(buildActiveDatepickerCellSelector(calendarType)) as HTMLElement | null;
    return collectDatepickerMenuTabOrderCore(menuHost, calendarType, activeCell);
  }

  getInitialFocusIndexForMenu(
    menuHost: HTMLElement,
    calendarType: DatepickerCalendarType,
    orderedFocusables: HTMLElement[],
  ): number {
    const activeCell = menuHost.querySelector(buildActiveDatepickerCellSelector(calendarType)) as HTMLElement | null;
    return getDatepickerMenuInitialFocusIndex(calendarType, orderedFocusables, activeCell);
  }
}
