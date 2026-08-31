export const RADIO_BUTTON_MISSING_ACCESSIBLE_NAME_ERROR =
  "RadioButton requires a label or aria-label to provide an accessible name.";

export function getRadioButtonAccessibleName(label?: string, ariaLabel?: string): string | null {
  const normalizedLabel = label?.trim() ?? "";
  const normalizedAriaLabel = ariaLabel?.trim() ?? "";

  return normalizedLabel || normalizedAriaLabel || null;
}
