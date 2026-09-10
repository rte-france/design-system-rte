export type AssitiveTextAppearances = "description" | "error" | "success" | "link";
export type AssistiveTextIconAppearances = "error" | "success";

export interface AssistiveTextProps {
  label: string;
  appearance: AssitiveTextAppearances;
  id?: string;
  showIcon?: boolean;
  href?: string;
  width?: number;
}
