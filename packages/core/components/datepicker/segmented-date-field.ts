import {
  ARROW_DOWN_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
  ARROW_UP_KEY,
  BACKSPACE_KEY,
  DELETE_KEY,
} from "../../constants/keyboard/keyboard.constants";

import { formatDate, parseDate } from "./datepicker.utils";

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

export function createEmptySegmentedDateFieldState(): SegmentedDateFieldState {
  return {
    dayDigits: "",
    monthDigits: "",
    yearDigits: "",
    activeSegment: "day",
  };
}

export function segmentedStateFromDdMmYyyyString(value: string): SegmentedDateFieldState {
  const digitsOnly = value.replace(/\D/g, "").slice(0, 8);
  return {
    dayDigits: digitsOnly.slice(0, 2),
    monthDigits: digitsOnly.slice(2, 4),
    yearDigits: digitsOnly.slice(4, 8),
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
  const digits = buildDigitsOnlyFromState(state);
  const day = digits.slice(0, 2);
  const month = digits.slice(2, 4);
  const year = digits.slice(4, 8);
  if (digits.length <= 2) {
    return day;
  }
  if (digits.length <= 4) {
    return `${day}/${month}`;
  }
  return `${day}/${month}/${year}`;
}

export function getParsedDateFromState(state: SegmentedDateFieldState): Date | null {
  return parseDate(buildMaskedDdMmYyyyFromState(state));
}

function segmentToIndex(segment: SegmentedDateActiveSegment): number {
  return SEGMENT_ORDER.indexOf(segment);
}

function indexToSegment(index: number): SegmentedDateActiveSegment {
  const normalized = ((index % 3) + 3) % 3;
  return SEGMENT_ORDER[normalized] ?? "day";
}

function clampDigits(raw: string, maxLength: number): string {
  return raw.replace(/\D/g, "").slice(0, maxLength);
}

function isStateFull(state: SegmentedDateFieldState): boolean {
  return (
    state.dayDigits.length === SEGMENT_LENGTH.day &&
    state.monthDigits.length === SEGMENT_LENGTH.month &&
    state.yearDigits.length === SEGMENT_LENGTH.year
  );
}

function appendDigitToSegment(state: SegmentedDateFieldState, digit: string): SegmentedDateFieldState {
  if (isStateFull(state)) {
    return state;
  }

  let segment = state.activeSegment;
  let { dayDigits, monthDigits, yearDigits } = state;

  const setSegment = (segmentType: SegmentedDateActiveSegment, value: string): void => {
    if (segmentType === "day") {
      dayDigits = value;
    } else if (segmentType === "month") {
      monthDigits = value;
    } else {
      yearDigits = value;
    }
  };

  const getSegment = (segmentType: SegmentedDateActiveSegment): string => {
    if (segmentType === "day") {
      return dayDigits;
    }
    if (segmentType === "month") {
      return monthDigits;
    }
    return yearDigits;
  };

  let guard = 0;
  while (guard < 4) {
    guard += 1;
    const maxLength = SEGMENT_LENGTH[segment];
    const current = getSegment(segment);
    if (current.length >= maxLength) {
      segment = indexToSegment(segmentToIndex(segment) + 1);
      continue;
    }
    const nextValue = `${current}${digit}`;
    setSegment(segment, nextValue);
    if (nextValue.length >= maxLength) {
      segment = indexToSegment(segmentToIndex(segment) + 1);
    }
    return { dayDigits, monthDigits, yearDigits, activeSegment: segment };
  }

  return state;
}

function moveActiveSegment(state: SegmentedDateFieldState, delta: number): SegmentedDateFieldState {
  return {
    ...state,
    activeSegment: indexToSegment(segmentToIndex(state.activeSegment) + delta),
  };
}

function daysInMonth(year: number, monthIndexZeroBased: number): number {
  return new Date(year, monthIndexZeroBased + 1, 0).getDate();
}

function applyArrowUp(state: SegmentedDateFieldState): SegmentedDateFieldState {
  const currentYear = new Date().getFullYear();
  if (state.activeSegment === "day") {
    return { ...state, dayDigits: clampDigits("1", 2) };
  }
  if (state.activeSegment === "month") {
    return { ...state, monthDigits: clampDigits("1", 2) };
  }
  return { ...state, yearDigits: clampDigits(`${currentYear}`, 4) };
}

function applyArrowDown(state: SegmentedDateFieldState): SegmentedDateFieldState {
  const currentYear = new Date().getFullYear();
  if (state.activeSegment === "year") {
    return { ...state, yearDigits: clampDigits(`${currentYear}`, 4) };
  }
  if (state.activeSegment === "month") {
    return { ...state, monthDigits: "12" };
  }
  const monthNum = Number.parseInt(state.monthDigits, 10);
  const yearNum = Number.parseInt(state.yearDigits, 10);
  if (
    state.monthDigits.length === 2 &&
    !Number.isNaN(monthNum) &&
    monthNum >= 1 &&
    monthNum <= 12 &&
    state.yearDigits.length === 4 &&
    !Number.isNaN(yearNum)
  ) {
    const lastDay = daysInMonth(yearNum, monthNum - 1);
    return { ...state, dayDigits: clampDigits(`${lastDay}`, 2) };
  }
  return { ...state, dayDigits: "31" };
}

function removeLastDigitInActiveSegment(state: SegmentedDateFieldState): SegmentedDateFieldState {
  const segment = state.activeSegment;
  if (segment === "day") {
    return { ...state, dayDigits: state.dayDigits.slice(0, -1) };
  }
  if (segment === "month") {
    return { ...state, monthDigits: state.monthDigits.slice(0, -1) };
  }
  return { ...state, yearDigits: state.yearDigits.slice(0, -1) };
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
    return moveActiveSegment(state, -1);
  }
  if (key === ARROW_RIGHT_KEY) {
    return moveActiveSegment(state, 1);
  }
  if (key === ARROW_UP_KEY) {
    return applyArrowUp(state);
  }
  if (key === ARROW_DOWN_KEY) {
    return applyArrowDown(state);
  }
  if (key === BACKSPACE_KEY || key === DELETE_KEY) {
    return removeLastDigitInActiveSegment(state);
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

export function formatDdMmYyyyFromValidDate(date: Date): string {
  return formatDate(date);
}
