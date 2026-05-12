import { DatepickerDayCell } from "../datepicker";
import { DaterangepickerDayCell } from "../daterangepicker";

export function getMondayBasedWeekdayIndex(date: Date): number {
  return (date.getDay() + 6) % 7;
}

export function isSameMonth(first: Date, second: Date): boolean {
  return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth();
}

export function getDayCellIndexForDate(dayCells: DaterangepickerDayCell[] | DatepickerDayCell[], date: Date): number {
  return dayCells.findIndex((cell) => isSameDay(cell.date, date));
}

export function isSameDay(first: Date, second: Date): boolean {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

export function areSameRange(a: [Date | null, Date | null], b: [Date | null, Date | null]): boolean {
  return !!a[0] && !!a[1] && !!b[0] && !!b[1] && isSameDay(a[0], b[0]) && isSameDay(a[1], b[1]);
}

export function normalizeDate(date: Date): Date {
  const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  normalizedDate.setHours(0, 0, 0, 0);
  return normalizedDate;
}
