export interface CheckboxProps {
  id: string;
  label: string;
  showLabel?: boolean;
  groupName?: string;
  description?: string;
  error?: boolean;
  errorMessage?: string;
  readOnly?: boolean;
  indeterminate?: boolean;
}
