export interface CheckboxProps {
  id: string;
  label?: string;
  /** @deprecated Element display should be controlled by `label` instead. */
  showLabel?: boolean;
  description?: string;
  isError?: boolean;
  /** @deprecated Use `isError` instead. */
  error?: boolean;
  errorMessage?: string;
  readOnly?: boolean;
  indeterminate?: boolean;
}
