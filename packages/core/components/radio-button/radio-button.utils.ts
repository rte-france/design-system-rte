export const RADIO_BUTTON_MISSING_ACCESSIBLE_NAME_ERROR =
  "RadioButton requires a label, an aria-labelledby, or an aria-label to provide an accessible name.";

export function getRadioButtonAccessibleName({ label, ariaLabel }: accessibleNameNameConfig): string | null {
  const normalizedLabel = label?.trim() ?? "";
  const normalizedAriaLabel = ariaLabel?.trim() ?? "";

  return normalizedLabel || normalizedAriaLabel || null;
}

type accessibleNameNameConfig = {
  label?: string;
  ariaLabel?: string;
};
