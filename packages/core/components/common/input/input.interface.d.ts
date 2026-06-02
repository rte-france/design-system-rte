import type { AssistiveTextProps } from "../../assistive-text/assistive-text.interface";

export interface BaseInputProps<TValue = unknown> {
  id: string;
  labelId?: string;
  showLabel?: boolean;
  showLabelRequirement?: boolean;
  assistiveTextLabel?: string;
  assistiveAppearance?: AssistiveTextProps["appearance"];
  showAssistiveIcon?: boolean;
  assistiveTextLink?: string;
  isError?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  readOnly?: boolean;
  value?: TValue;
  defaultValue?: TValue;
  onChange?: (value: TValue) => void;
}

export interface InputProps<TValue = string> extends BaseInputProps<TValue> {
  label: string;
  labelPosition?: "top" | "side";
  required?: boolean;
}
