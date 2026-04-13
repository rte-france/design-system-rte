import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  BACKSPACE_KEY,
  DELETE_KEY,
} from "../../constants/keyboard/keyboard.constants";

import {
  buildMaskedDdMmYyyyFromDigitParts,
  parseDate,
  parseDdMmYyyyMaskedString,
  getLastDayOfMonth,
} from "./datepicker.utils";

export type SegmentedDateActiveSegment = "day" | "month" | "year";

export const SEGMENT_ORDER: readonly SegmentedDateActiveSegment[] = ["day", "month", "year"];

export interface SegmentedDateFieldState {
  dayDigits: string;
  monthDigits: string;
  yearDigits: string;
  activeSegment: SegmentedDateActiveSegment;
}

const SEGMENT_LENGTH: Record<SegmentedDateActiveSegment, number> = {
  day: 2,
  month: 2,
  year: 4,
};

const SEGMENT_DIGITS_KEY: Record<
  SegmentedDateActiveSegment,
  keyof Pick<SegmentedDateFieldState, "dayDigits" | "monthDigits" | "yearDigits">
> = {
  day: "dayDigits",
  month: "monthDigits",
  year: "yearDigits",
};

function readSegmentDigits(state: SegmentedDateFieldState, segment: SegmentedDateActiveSegment): string {
  return state[SEGMENT_DIGITS_KEY[segment]];
}

function withSegmentDigits(
  state: SegmentedDateFieldState,
  segment: SegmentedDateActiveSegment,
  digits: string,
): SegmentedDateFieldState {
  const key = SEGMENT_DIGITS_KEY[segment];
  return { ...state, [key]: digits };
}

export function getSegmentDisplayText(
  digits: string,
  segment: SegmentedDateActiveSegment,
  emptyPlaceholder: string,
): string {
  if (!digits?.length) {
    return emptyPlaceholder;
  }
  const maxLength = SEGMENT_LENGTH[segment];
  if (digits.length < maxLength) {
    return digits.padStart(maxLength, "0");
  }
  return digits;
}

export function createEmptySegmentedDateFieldState(): SegmentedDateFieldState {
  return {
    dayDigits: "",
    monthDigits: "",
    yearDigits: "",
    activeSegment: "day",
  };
}

export function segmentedStateFromDdMmYyyyString(value: string): SegmentedDateFieldState {
  const parts = parseDdMmYyyyMaskedString(value);
  return {
    dayDigits: parts.dayDigits,
    monthDigits: parts.monthDigits,
    yearDigits: parts.yearDigits,
    activeSegment: "day",
  };
}

export function segmentedStateFromIsoDate(date: Date): SegmentedDateFieldState {
  return {
    dayDigits: `${date.getDate()}`.padStart(2, "0"),
    monthDigits: `${date.getMonth() + 1}`.padStart(2, "0"),
    yearDigits: `${date.getFullYear()}`.padStart(4, "0"),
    activeSegment: "day",
  };
}

export function buildDigitsOnlyFromState(state: SegmentedDateFieldState): string {
  return `${state.dayDigits}${state.monthDigits}${state.yearDigits}`;
}

export function buildMaskedDdMmYyyyFromState(state: SegmentedDateFieldState): string {
  return buildMaskedDdMmYyyyFromDigitParts({
    dayDigits: state.dayDigits,
    monthDigits: state.monthDigits,
    yearDigits: state.yearDigits,
  });
}

export function getParsedDateFromState(state: SegmentedDateFieldState): Date | null {
  return parseDate(buildMaskedDdMmYyyyFromState(state));
}

function segmentToIndex(segment: SegmentedDateActiveSegment): number {
  return SEGMENT_ORDER.indexOf(segment);
}

function nextSegment(segment: SegmentedDateActiveSegment): SegmentedDateActiveSegment | null {
  const index = segmentToIndex(segment);
  if (index < 0 || index >= SEGMENT_ORDER.length - 1) {
    return null;
  }
  return SEGMENT_ORDER[index + 1] ?? null;
}

function clampDigits(raw: string, maxLength: number): string {
  return raw.replace(/\D/g, "").slice(0, maxLength);
}

function getMaxDayForDaySegment(state: SegmentedDateFieldState): number {
  const { monthDigits, yearDigits } = state;
  if (monthDigits.length === 2 && yearDigits.length === 4) {
    const monthNum = Number.parseInt(monthDigits, 10);
    const yearNum = Number.parseInt(yearDigits, 10);
    if (!Number.isNaN(monthNum) && monthNum >= 1 && monthNum <= 12 && !Number.isNaN(yearNum)) {
      return getLastDayOfMonth(yearNum, monthNum - 1);
    }
  }
  return 31;
}

function isMonthDigitsCompleteValid(monthDigits: string): boolean {
  if (monthDigits.length !== 2) {
    return false;
  }
  const monthNum = Number.parseInt(monthDigits, 10);
  return !Number.isNaN(monthNum) && monthNum >= 1 && monthNum <= 12;
}

function isYearDigitsCompleteValid(yearDigits: string): boolean {
  if (yearDigits.length !== 4) {
    return false;
  }
  const yearNum = Number.parseInt(yearDigits, 10);
  return !Number.isNaN(yearNum) && yearNum >= 1 && yearNum <= 9999;
}

function isDayDigitsCompleteValid(dayDigits: string, monthDigits: string, yearDigits: string): boolean {
  if (dayDigits.length !== 2) {
    return false;
  }
  const dayNum = Number.parseInt(dayDigits, 10);
  if (Number.isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
    return false;
  }
  if (monthDigits.length === 2 && yearDigits.length === 4) {
    const monthNum = Number.parseInt(monthDigits, 10);
    const yearNum = Number.parseInt(yearDigits, 10);
    if (Number.isNaN(monthNum) || monthNum < 1 || monthNum > 12 || Number.isNaN(yearNum)) {
      return true;
    }
    const maxDay = getLastDayOfMonth(yearNum, monthNum - 1);
    return dayNum >= 1 && dayNum <= maxDay;
  }
  return true;
}

export function isSegmentCompleteValid(segment: SegmentedDateActiveSegment, state: SegmentedDateFieldState): boolean {
  if (segment === "day") {
    return isDayDigitsCompleteValid(state.dayDigits, state.monthDigits, state.yearDigits);
  }
  if (segment === "month") {
    return isMonthDigitsCompleteValid(state.monthDigits);
  }
  return isYearDigitsCompleteValid(state.yearDigits);
}

function clearSegmentDigits(
  state: SegmentedDateFieldState,
  segment: SegmentedDateActiveSegment,
): SegmentedDateFieldState {
  return withSegmentDigits(state, segment, "");
}

function padSegmentDigitsToWidth(digits: string, segment: SegmentedDateActiveSegment): string {
  const maxLength = SEGMENT_LENGTH[segment];
  if (digits.length && digits.length < maxLength) {
    return digits.padStart(maxLength, "0");
  }
  return digits;
}

export function applySegmentLeaveWhenChangingActiveSegment(
  state: SegmentedDateFieldState,
  nextActiveSegment: SegmentedDateActiveSegment,
): SegmentedDateFieldState {
  if (state.activeSegment === nextActiveSegment) {
    return state;
  }
  const segmentLeaving = state.activeSegment;
  let nextState: SegmentedDateFieldState = { ...state };
  const rawDigits = readSegmentDigits(state, segmentLeaving);
  const paddedDigits = padSegmentDigitsToWidth(rawDigits, segmentLeaving);
  if (paddedDigits !== rawDigits) {
    nextState = withSegmentDigits(nextState, segmentLeaving, paddedDigits);
  }
  if (!isSegmentCompleteValid(segmentLeaving, nextState)) {
    nextState = clearSegmentDigits(nextState, segmentLeaving);
  }
  return { ...nextState, activeSegment: nextActiveSegment };
}

export function resetIncompleteSegmentsOnBlur(state: SegmentedDateFieldState): SegmentedDateFieldState {
  let next: SegmentedDateFieldState = {
    ...state,
    dayDigits: padSegmentDigitsToWidth(state.dayDigits, "day"),
    monthDigits: padSegmentDigitsToWidth(state.monthDigits, "month"),
    yearDigits: padSegmentDigitsToWidth(state.yearDigits, "year"),
  };
  if (!isSegmentCompleteValid("day", next)) {
    next = { ...next, dayDigits: "" };
  }
  if (!isSegmentCompleteValid("month", next)) {
    next = { ...next, monthDigits: "" };
  }
  if (!isSegmentCompleteValid("year", next)) {
    next = { ...next, yearDigits: "" };
  }
  return next;
}

export function firstIncompleteSegmentForState(state: SegmentedDateFieldState): SegmentedDateActiveSegment {
  if (state.dayDigits.length < SEGMENT_LENGTH.day) {
    return "day";
  }
  if (state.monthDigits.length < SEGMENT_LENGTH.month) {
    return "month";
  }
  if (state.yearDigits.length < SEGMENT_LENGTH.year) {
    return "year";
  }
  return "year";
}

function appendDigitToSegment(state: SegmentedDateFieldState, digit: string): SegmentedDateFieldState {
  const segment = state.activeSegment;
  const maxLength = SEGMENT_LENGTH[segment];
  const current = readSegmentDigits(state, segment);

  if (current.length >= maxLength) {
    return { ...withSegmentDigits(state, segment, digit), activeSegment: segment };
  }

  const nextValue = `${current}${digit}`;
  if (segment === "day" && nextValue.length === 2) {
    const dayNum = Number.parseInt(nextValue, 10);
    if (dayNum < 1 || dayNum > 31) {
      return state;
    }
  }
  if (segment === "month" && nextValue.length === 2) {
    const monthNum = Number.parseInt(nextValue, 10);
    if (monthNum < 1 || monthNum > 12) {
      return state;
    }
  }

  let activeSegment = segment;
  if (nextValue.length >= maxLength && segment !== "year") {
    const advanced = nextSegment(segment);
    if (advanced !== null) {
      activeSegment = advanced;
    }
  }
  return { ...withSegmentDigits(state, segment, nextValue), activeSegment };
}

function moveActiveSegmentClamped(state: SegmentedDateFieldState, delta: number): SegmentedDateFieldState {
  const currentIndex = segmentToIndex(state.activeSegment);
  const nextIndex = currentIndex + delta;
  if (nextIndex < 0 || nextIndex > SEGMENT_ORDER.length - 1) {
    return state;
  }
  const nextActive = SEGMENT_ORDER[nextIndex];
  if (nextActive === undefined) {
    return state;
  }
  return applySegmentLeaveWhenChangingActiveSegment(state, nextActive);
}

function stepMonthDigits(monthDigits: string, delta: number): string {
  let value = monthDigits.length ? Number.parseInt(monthDigits, 10) : 0;
  if (value === 0 && monthDigits.length === 0) {
    value = delta > 0 ? 0 : 13;
  }
  let nextNum = value + delta;
  nextNum = Math.max(1, Math.min(12, nextNum));
  return String(nextNum).padStart(2, "0");
}

function stepYearDigits(yearDigits: string, delta: number): string {
  const currentYear = new Date().getFullYear();
  if (yearDigits.length === 0) {
    return clampDigits(String(currentYear + delta), 4);
  }
  const padded = yearDigits.padEnd(4, "0");
  let next = Number.parseInt(padded, 10) + delta;
  if (Number.isNaN(next)) {
    next = currentYear + delta;
  }
  next = Math.max(1000, Math.min(9999, next));
  return clampDigits(String(next), 4);
}

function withDayDigitsClampedToMonth(state: SegmentedDateFieldState, dayNumber: number): SegmentedDateFieldState {
  const maxDay = getMaxDayForDaySegment(state);
  const clamped = Math.max(1, Math.min(maxDay, dayNumber));
  return { ...state, dayDigits: String(clamped).padStart(2, "0") };
}

function applyArrowUp(state: SegmentedDateFieldState): SegmentedDateFieldState {
  if (state.activeSegment === "day") {
    const value = state.dayDigits.length ? Number.parseInt(state.dayDigits, 10) : 0;
    return withDayDigitsClampedToMonth(state, value + 1);
  }
  if (state.activeSegment === "month") {
    return { ...state, monthDigits: stepMonthDigits(state.monthDigits, 1) };
  }
  return { ...state, yearDigits: stepYearDigits(state.yearDigits, 1) };
}

function applyArrowDown(state: SegmentedDateFieldState): SegmentedDateFieldState {
  if (state.activeSegment === "day") {
    let value = state.dayDigits.length ? Number.parseInt(state.dayDigits, 10) : 0;
    if (value === 0 && state.dayDigits.length === 0) {
      value = getMaxDayForDaySegment(state) + 1;
    }
    return withDayDigitsClampedToMonth(state, value - 1);
  }
  if (state.activeSegment === "month") {
    return { ...state, monthDigits: stepMonthDigits(state.monthDigits, -1) };
  }
  return { ...state, yearDigits: stepYearDigits(state.yearDigits, -1) };
}

function emptyActiveSegment(state: SegmentedDateFieldState): SegmentedDateFieldState {
  return withSegmentDigits(state, state.activeSegment, "");
}

export interface ReduceSegmentedDateFieldKeyParams {
  state: SegmentedDateFieldState;
  key: string;
  isComposing: boolean;
}

export function reduceSegmentedDateFieldKey(params: ReduceSegmentedDateFieldKeyParams): SegmentedDateFieldState | null {
  const { state, key, isComposing } = params;
  if (isComposing) {
    return null;
  }

  if (key === ARROW_LEFT_KEY) {
    return moveActiveSegmentClamped(state, -1);
  }
  if (key === ARROW_RIGHT_KEY) {
    return moveActiveSegmentClamped(state, 1);
  }
  if (key === ARROW_UP_KEY) {
    return applyArrowUp(state);
  }
  if (key === ARROW_DOWN_KEY) {
    return applyArrowDown(state);
  }
  if (key === BACKSPACE_KEY || key === DELETE_KEY) {
    return emptyActiveSegment(state);
  }

  if (key.length === 1 && /\d/.test(key)) {
    return appendDigitToSegment(state, key);
  }

  return null;
}

export function shouldPreventDefaultSegmentedKey(key: string): boolean {
  if ([ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, BACKSPACE_KEY, DELETE_KEY].includes(key)) {
    return true;
  }
  if (key.length === 1 && /\d/.test(key)) {
    return true;
  }
  return false;
}
