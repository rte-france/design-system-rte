export type SearchBarAppearance = "primary" | "secondary";

export interface SearchBarProps {
  id?: string;
  appearance?: SearchBarAppearance;
  compactSpacing?: boolean;
  label?: string;
  showResetButton?: boolean;
  assistiveText?: string;
  value?: string;
}
