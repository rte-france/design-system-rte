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
