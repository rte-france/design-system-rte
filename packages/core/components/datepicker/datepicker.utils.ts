import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
} from "../../constants/keyboard/keyboard.constants";

import {
  DATEPICKER_MENU_REST_TAB_KEYS_COMPACT,
  DATEPICKER_MENU_REST_TAB_KEYS_DAY,
  type DatepickerTabDataKey,
} from "./datepicker.constants";
import type {
  DatepickerCalendarType,
  DatepickerDayCell,
  DatepickerDayCellType,
  DatepickerMonthCell,
  DatepickerYearCell,
  NavigateViewDateParams,
} from "./datepicker.interface";

const DD_MM_YYYY_EMPTY_SLOT_MARKER = "\u200b";

export interface DdMmYyyyDigitParts {
  dayDigits: string;
  monthDigits: string;
  yearDigits: string;
}

function stripDdMmYyyySegmentPart(part: string): string {
  return part.split(DD_MM_YYYY_EMPTY_SLOT_MARKER).join("").replace(/\D/g, "");
}

function parseDdMmYyyyTwoSlashParts(dayPart: string, secondPart: string): DdMmYyyyDigitParts {
  const dayDigits = stripDdMmYyyySegmentPart(dayPart).slice(0, 2);
  const rest = stripDdMmYyyySegmentPart(secondPart).slice(0, 4);
  if (rest.length > 2) {
    return { dayDigits, monthDigits: "", yearDigits: rest };
  }
  if (rest.length === 1 || rest.length === 2) {
    const monthNum = Number.parseInt(rest, 10);
    if (!Number.isNaN(monthNum) && monthNum > 12) {
      return { dayDigits, monthDigits: "", yearDigits: rest };
    }
  }
  return { dayDigits, monthDigits: rest.slice(0, 2), yearDigits: "" };
}

function encodeDdMmYyyyDoubleSlashBoundaries(masked: string): string {
  let result = masked;
  while (result.includes("//")) {
    result = result.replace("//", `/${DD_MM_YYYY_EMPTY_SLOT_MARKER}/`);
  }
  return result;
}

export function parseDdMmYyyyMaskedString(value: string): DdMmYyyyDigitParts {
  const trimmed = value.trim();
  if (trimmed.includes("/")) {
    const rawParts = trimmed.split("/");
    if (rawParts.length === 2) {
      return parseDdMmYyyyTwoSlashParts(rawParts[0] ?? "", rawParts[1] ?? "");
    }
    return {
      dayDigits: stripDdMmYyyySegmentPart(rawParts[0] ?? "").slice(0, 2),
      monthDigits: stripDdMmYyyySegmentPart(rawParts[1] ?? "").slice(0, 2),
      yearDigits: stripDdMmYyyySegmentPart(rawParts[2] ?? "").slice(0, 4),
    };
  }
  const digitsOnly = trimmed.replace(/\D/g, "").slice(0, 8);
  return {
    dayDigits: digitsOnly.slice(0, 2),
    monthDigits: digitsOnly.slice(2, 4),
    yearDigits: digitsOnly.slice(4, 8),
  };
}

export function buildMaskedDdMmYyyyFromDigitParts(parts: DdMmYyyyDigitParts): string {
  const { dayDigits, monthDigits, yearDigits } = parts;
  const hasDay = dayDigits.length > 0;
  const hasMonth = monthDigits.length > 0;
  const hasYear = yearDigits.length > 0;

  if (!hasDay && !hasMonth && !hasYear) {
    return "";
  }
  if (hasDay && !hasMonth && !hasYear) {
    return dayDigits;
  }
  if (!hasDay && hasMonth && !hasYear) {
    return `/${monthDigits}`;
  }
  if (!hasDay && !hasMonth && hasYear) {
    return encodeDdMmYyyyDoubleSlashBoundaries(`//${yearDigits}`);
  }
  if (hasDay && hasMonth && !hasYear) {
    return `${dayDigits}/${monthDigits}`;
  }
  if (hasDay && !hasMonth && hasYear) {
    return encodeDdMmYyyyDoubleSlashBoundaries(`${dayDigits}//${yearDigits}`);
  }
  if (!hasDay && hasMonth && hasYear) {
    return `/${monthDigits}/${yearDigits}`;
  }
  return encodeDdMmYyyyDoubleSlashBoundaries(`${dayDigits}/${monthDigits}/${yearDigits}`);
}

export function getDatepickerMenuRestTabKeysInOrder(
  calendarType: DatepickerCalendarType,
): readonly DatepickerTabDataKey[] {
  if (calendarType === "day") {
    return DATEPICKER_MENU_REST_TAB_KEYS_DAY;
  }
  return DATEPICKER_MENU_REST_TAB_KEYS_COMPACT;
}

export function resolveDatepickerMenuFocusableElement(element: HTMLElement): HTMLElement {
  if (element.tagName === "BUTTON") {
    return element;
  }
  const innerButton = element.querySelector("button");
  if (innerButton instanceof HTMLElement) {
    return innerButton;
  }
  return element;
}

function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function endOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function monthHasSelectableDay(params: {
  year: number;
  monthIndex: number;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: readonly Date[];
}): boolean {
  const { year, monthIndex, minDate, maxDate, disabledDates } = params;
  const lastDay = endOfMonth(new Date(year, monthIndex, 1)).getDate();
  for (let day = 1; day <= lastDay; day++) {
    const date = startOfDay(new Date(year, monthIndex, day));
    if (!isDateDisabled({ date, minDate, maxDate, disabledDates })) {
      return true;
    }
  }
  return false;
}

function yearHasSelectableDay(params: {
  year: number;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: readonly Date[];
}): boolean {
  const { year, minDate, maxDate, disabledDates } = params;
  for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
    if (monthHasSelectableDay({ year, monthIndex, minDate, maxDate, disabledDates })) {
      return true;
    }
  }
  return false;
}

function getMondayBasedWeekdayIndex(date: Date): number {
  return (date.getDay() + 6) % 7;
}

function isSameMonth(first: Date, second: Date): boolean {
  return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth();
}

export function maskDateInput(value: string): string {
  const parts = parseDdMmYyyyMaskedString(value);
  return buildMaskedDdMmYyyyFromDigitParts(parts);
}

export function formatDate(date: Date): string {
  const day = `${date.getDate()}`.padStart(2, "0");
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const year = `${date.getFullYear()}`.padStart(4, "0");
  return `${day}/${month}/${year}`;
}

export function parseDate(value: string): Date | null {
  const trimmedValue = value.trim();
  if (trimmedValue.length === 0) {
    return null;
  }

  const datePartsMatch = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(trimmedValue);
  if (!datePartsMatch) {
    return null;
  }

  const day = Number(datePartsMatch[1]);
  const month = Number(datePartsMatch[2]);
  const year = Number(datePartsMatch[3]);

  if (month < 1 || month > 12) {
    return null;
  }

  const date = new Date(year, month - 1, day);
  const isValidParsedDate =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day &&
    !Number.isNaN(date.valueOf());
  return isValidParsedDate ? date : null;
}

export function isSameDay(first: Date, second: Date): boolean {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

export function isBeforeDay(first: Date, second: Date): boolean {
  return startOfDay(first).valueOf() < startOfDay(second).valueOf();
}

export function isAfterDay(first: Date, second: Date): boolean {
  return startOfDay(first).valueOf() > startOfDay(second).valueOf();
}

export function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function addDays(date: Date, amount: number): Date {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + amount);
  return nextDate;
}

export function addMonths(date: Date, amount: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

export function addYears(date: Date, amount: number): Date {
  return new Date(date.getFullYear() + amount, date.getMonth(), 1);
}

export function getDecadeStartYear(year: number): number {
  return Math.floor(year / 10) * 10;
}

export function navigateViewDate(params: NavigateViewDateParams): Date {
  const { viewDate, calendarType } = params;
  if (calendarType === "day") {
    const action = params.dayAction;
    if (!action) {
      return viewDate;
    }
    if (["prevYear", "nextYear"].includes(action)) {
      return addMonths(viewDate, action === "prevYear" ? -12 : 12);
    }
    return addMonths(viewDate, action === "prevMonth" ? -1 : 1);
  }
  if (calendarType === "month") {
    const step = params.compactStep;
    if (!step) {
      return viewDate;
    }
    return addYears(viewDate, step === "previous" ? -1 : 1);
  }
  if (calendarType === "year") {
    const step = params.compactStep;
    if (!step) {
      return viewDate;
    }
    return addYears(viewDate, step === "previous" ? -10 : 10);
  }
  return viewDate;
}

function isCalendarDayInDisabledDates(currentDay: Date, disabledDates?: readonly Date[]): boolean {
  if (!disabledDates || disabledDates.length === 0) {
    return false;
  }
  return disabledDates.some((forbidden) => isSameDay(currentDay, startOfDay(forbidden)));
}

export function isDateDisabled(params: {
  date: Date;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: readonly Date[];
}): boolean {
  const { date, minDate, maxDate, disabledDates } = params;
  const currentDay = startOfDay(date);
  if (minDate && isBeforeDay(currentDay, minDate)) {
    return true;
  }
  if (maxDate && isAfterDay(currentDay, maxDate)) {
    return true;
  }
  return isCalendarDayInDisabledDates(currentDay, disabledDates);
}

export function getMonthLabel(date: Date, locale: string = "fr-FR"): string {
  return new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(date);
}

export function getYearLabel(date: Date, locale: string = "fr-FR"): string {
  return new Intl.DateTimeFormat(locale, { year: "numeric" }).format(date);
}

export function getDecadeRangeLabel(date: Date): string {
  const decadeStart = getDecadeStartYear(date.getFullYear());
  const decadeEnd = decadeStart + 9;
  return `${decadeStart} – ${decadeEnd}`;
}

export function getWeekdayShortLabels(locale: string = "fr-FR"): string[] {
  const monday = new Date(2021, 0, 4);
  return Array.from({ length: 7 }).map((_, index) => {
    const day = addDays(monday, index);
    const label = new Intl.DateTimeFormat(locale, { weekday: "short" }).format(day);
    const firstLetter = label.trim().charAt(0);
    return firstLetter.toLocaleUpperCase(locale);
  });
}

export function resolveInitialCalendarDay(params: {
  pendingDate: Date | null;
  selectedDate: Date | null;
  dayCells: DatepickerDayCell[];
}): Date {
  const { pendingDate, selectedDate, dayCells } = params;
  const candidate = startOfDay(pendingDate ?? selectedDate ?? new Date());

  const matchInGrid = dayCells.find((cell) => isSameDay(cell.date, candidate));
  if (matchInGrid && !matchInGrid.isDisabled) {
    return matchInGrid.date;
  }

  if (matchInGrid?.isDisabled) {
    const resolved = findNextEnabledFromIndex(dayCells, dayCells.indexOf(matchInGrid));
    if (resolved) {
      return resolved.date;
    }
  }

  const today = startOfDay(new Date());
  const todayCell = dayCells.find((cell) => isSameDay(cell.date, today));
  if (todayCell && !todayCell.isDisabled) {
    return todayCell.date;
  }

  if (todayCell?.isDisabled) {
    const resolved = findNextEnabledFromIndex(dayCells, dayCells.indexOf(todayCell));
    if (resolved) {
      return resolved.date;
    }
  }

  const firstEnabled = dayCells.find((cell) => !cell.isDisabled);
  return firstEnabled ? firstEnabled.date : candidate;
}

function findNextEnabledFromIndex(dayCells: DatepickerDayCell[], startIndex: number): DatepickerDayCell | undefined {
  for (let index = startIndex; index < dayCells.length; index++) {
    const cell = dayCells[index];
    if (!cell.isDisabled) {
      return cell;
    }
  }
  for (let index = 0; index < startIndex; index++) {
    const cell = dayCells[index];
    if (!cell.isDisabled) {
      return cell;
    }
  }
  return undefined;
}

export function getDayCellIndexForDate(dayCells: DatepickerDayCell[], date: Date): number {
  return dayCells.findIndex((cell) => isSameDay(cell.date, date));
}

export function buildDayGrid(params: {
  viewDate: Date;
  selectedDate: Date | null;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: readonly Date[];
}): DatepickerDayCell[] {
  const { viewDate, selectedDate, minDate, maxDate, disabledDates } = params;

  const firstMonthDay = startOfMonth(viewDate);
  const leadingDaysFromPreviousMonth = getMondayBasedWeekdayIndex(firstMonthDay);
  const gridStart = addDays(firstMonthDay, -leadingDaysFromPreviousMonth);

  const today = startOfDay(new Date());

  return Array.from({ length: 42 }).map((_, index) => {
    const cellDate = addDays(gridStart, index);
    const isCurrentMonth = isSameMonth(cellDate, viewDate);
    const isSelected = !!selectedDate && isSameDay(cellDate, selectedDate);
    const isToday = isSameDay(cellDate, today);

    let cellType: DatepickerDayCellType = "default";
    if (!isCurrentMonth) {
      cellType = "prev/next";
    } else if (isSelected) {
      cellType = "selected";
    } else if (isToday) {
      cellType = "today";
    }

    return {
      date: cellDate,
      label: `${cellDate.getDate()}`,
      cellType,
      isDisabled: isDateDisabled({ date: cellDate, minDate, maxDate, disabledDates }),
    };
  });
}

export function buildMonthGrid(params: {
  viewDate: Date;
  selectedDate: Date | null;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: readonly Date[];
  locale?: string;
}): DatepickerMonthCell[] {
  const { viewDate, selectedDate, minDate, maxDate, disabledDates, locale = "fr-FR" } = params;
  const selectedMonthDate = selectedDate ? startOfMonth(selectedDate) : null;
  const currentMonthDate = startOfMonth(new Date());

  const year = viewDate.getFullYear();
  return Array.from({ length: 12 }).map((_, monthIndex) => {
    const cellDate = new Date(year, monthIndex, 1);
    return {
      monthIndex,
      label: new Intl.DateTimeFormat(locale, { month: "long" }).format(cellDate),
      isDisabled: !monthHasSelectableDay({ year, monthIndex, minDate, maxDate, disabledDates }),
      isCurrent: cellDate.getTime() === currentMonthDate.getTime(),
      isSelected: !!selectedMonthDate && cellDate.getTime() === selectedMonthDate.getTime(),
    };
  });
}

export function buildYearGrid(params: {
  viewDate: Date;
  selectedDate: Date | null;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: readonly Date[];
}): DatepickerYearCell[] {
  const { viewDate, selectedDate, minDate, maxDate, disabledDates } = params;
  const currentYear = new Date().getFullYear();
  const selectedYear = selectedDate?.getFullYear() ?? null;
  const startYear = getDecadeStartYear(viewDate.getFullYear());

  return Array.from({ length: 10 }).map((_, index) => {
    const year = startYear + index;
    return {
      year,
      label: `${year}`,
      isDisabled: !yearHasSelectableDay({ year, minDate, maxDate, disabledDates }),
      isCurrent: year === currentYear,
      isSelected: selectedYear === year,
    };
  });
}

export function getNextGridCellIndex(params: {
  currentIndex: number;
  key: string;
  columnCount: number;
  cellCount: number;
}): number | null {
  const { currentIndex, key, columnCount, cellCount } = params;
  if (key === ARROW_LEFT_KEY) {
    return currentIndex > 0 ? currentIndex - 1 : null;
  }
  if (key === ARROW_RIGHT_KEY) {
    return currentIndex < cellCount - 1 ? currentIndex + 1 : null;
  }
  if (key === ARROW_UP_KEY) {
    const nextIndex = currentIndex - columnCount;
    return nextIndex >= 0 ? nextIndex : null;
  }
  if (key === ARROW_DOWN_KEY) {
    const nextIndex = currentIndex + columnCount;
    return nextIndex < cellCount ? nextIndex : null;
  }
  return null;
}
