import { AssistiveTextProps } from "../assistive-text/assistive-text.interface";

export interface InputProps {
  id: string;
  label: string;
  labelPosition?: "top" | "side";
  required?: boolean;
  value?: string;
  defaultValue?: string;
  showLabel?: boolean;
  isError?: boolean;
  assistiveAppearance?: AssistiveTextProps["appearance"];
  showAssistiveIcon?: boolean;
  assistiveTextLabel?: string;
  assistiveTextLink?: string;
  showLabelRequirement?: boolean;
  onChange?: (value: string) => void;
  disabled?: boolean;
  readonly?: boolean;
}
