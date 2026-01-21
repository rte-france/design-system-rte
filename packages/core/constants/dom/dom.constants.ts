export const FOCUSABLE_ELEMENTS = [
  "button",
  "a[href]",
  "input",
  "select",
  "textarea",
  "details",
  '[tabindex]:not([tabindex="-1"])',
];

export const FOCUSABLE_ELEMENTS_QUERY = FOCUSABLE_ELEMENTS.map(
  (element) => element + ":not([disabled]):not([aria-hidden])",
).join(",");

export const FOCUSABLE_BUTTONS_QUERY = ["button", '[role="button"]', '[tabindex]:not([tabindex="-1"])']
  .map((element) => element + ":not([disabled]):not([aria-hidden])")
  .join(",");
