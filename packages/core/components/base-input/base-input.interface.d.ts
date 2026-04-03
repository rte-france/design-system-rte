export interface BaseInput {
  id: string;
  labelId?: string;
  showLabel?: boolean;
  showLabelRequirement?: boolean;
  assistiveTextLabel?: string;
  assistiveAppearance?: "description" | "error" | "success" | "link";
  showAssistiveIcon?: boolean;
  assistiveTextLink?: string;
  isError?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}
