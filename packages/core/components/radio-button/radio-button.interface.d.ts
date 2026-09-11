export interface RadioButtonProps {
  label?: string;
  ariaLabel?: string;
  value: string;
  groupName: string;
  description?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  readOnly?: boolean;
  isChecked?: boolean;
}
