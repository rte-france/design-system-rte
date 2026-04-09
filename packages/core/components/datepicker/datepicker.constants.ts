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
