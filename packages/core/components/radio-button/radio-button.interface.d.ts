export interface RadioButtonProps {
  label?: string;
  ariaLabel?: string;
  value: string;
  groupName: string;
  disabled?: boolean;
  error?: boolean;
  readOnly?: boolean;
  isChecked?: boolean;
}
