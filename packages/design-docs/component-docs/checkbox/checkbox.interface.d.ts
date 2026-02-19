export interface CheckboxProps {
  id: string;
  label: string;
  showLabel?: boolean;
  description?: string;
  error?: boolean;
  errorMessage?: string;
  readOnly?: boolean;
  indeterminate?: boolean;
}
