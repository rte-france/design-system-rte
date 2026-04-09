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

export const DATEPICKER_MENU_REST_TAB_KEYS_COMPACT = [
  "navPrevCompact",
  "monthLabel",
  "navNextCompact",
  "cancel",
  "confirm",
] as const satisfies readonly DatepickerTabDataKey[];
