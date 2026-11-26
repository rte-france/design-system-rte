export interface CheckboxProps {
  id: string;
  label: string;
  hasLabel?: boolean;
  /** @deprecated Use `hasLabel` instead. */
  showLabel?: boolean;
  description?: string;
  isError?: boolean;
  /** @deprecated Use `isError` instead. */
  error?: boolean;
  errorMessage?: string;
  readOnly?: boolean;
  indeterminate?: boolean;
}
