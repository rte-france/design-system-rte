import type { DatepickerCalendarType } from "./datepicker.interface";

export const DATEPICKER_DEFAULT_WIDTH = "248px";

export const DATEPICKER_DEFAULT_LOCALE = "fr-FR";

export const DATEPICKER_DEFAULT_CALENDAR_TYPE = "day" as const satisfies DatepickerCalendarType;

export const DATEPICKER_ARIA_OPEN_CALENDAR = "Ouvrir le calendrier";

export const DATEPICKER_ARIA_CHANGE_DATE_PREFIX = "Changer la date, ";

export const DATEPICKER_YEAR_GRID_PAGE_SIZE = 11;

export const DATEPICKER_TAB_DATA = {
  cancel: "cancel",
  confirm: "confirm",
  navPrevYear: "nav-prev-year",
  navPrevMonth: "nav-prev-month",
  monthLabel: "month-label",
  navNextMonth: "nav-next-month",
  navNextYear: "nav-next-year",
  navPrevCompact: "nav-prev-compact",
  navNextCompact: "nav-next-compact",
} as const;

export type DatepickerTabDataKey = keyof typeof DATEPICKER_TAB_DATA;

export enum DateSegmentEnum {
  DAY = "DD",
  MONTH = "MM",
  YEAR = "YYYY",
}

export const DATEPICKER_MENU_REST_TAB_KEYS_DAY = [
  "cancel",
  "confirm",
  "navPrevYear",
  "navPrevMonth",
  "monthLabel",
  "navNextMonth",
  "navNextYear",
] as const satisfies readonly DatepickerTabDataKey[];

export const DATEPICKER_MENU_HEADER_TAB_KEYS_COMPACT = [
  "navPrevCompact",
  "monthLabel",
  "navNextCompact",
] as const satisfies readonly DatepickerTabDataKey[];

export const DATEPICKER_MENU_FOOTER_TAB_KEYS = ["cancel", "confirm"] as const satisfies readonly DatepickerTabDataKey[];

export const DATEPICKER_MENU_REST_TAB_KEYS_COMPACT = [
  ...DATEPICKER_MENU_HEADER_TAB_KEYS_COMPACT,
  ...DATEPICKER_MENU_FOOTER_TAB_KEYS,
] as const satisfies readonly DatepickerTabDataKey[];

export const DATE_SEGMENTS_ORDER: DateSegmentEnum[] = [
  DateSegmentEnum.DAY,
  DateSegmentEnum.MONTH,
  DateSegmentEnum.YEAR,
];

export const DATE_SEGMENT_MIN_VALUE: number = 1;

export const DATE_SEGMENT_MAX_VALUE: Record<DateSegmentEnum, number> = {
  [DateSegmentEnum.DAY]: 31,
  [DateSegmentEnum.MONTH]: 12,
  [DateSegmentEnum.YEAR]: 9999,
};

export const DATE_SEGMENT_MAX_FIRST_DIGIT: Record<DateSegmentEnum, number> = {
  [DateSegmentEnum.DAY]: 3,
  [DateSegmentEnum.MONTH]: 1,
  [DateSegmentEnum.YEAR]: 9,
};
