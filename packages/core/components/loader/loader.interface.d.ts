export type LoaderAppearance = "brand" | "reverse";
export type LoaderSize = "small" | "medium" | "large";
export type LoaderLabelPosition = "right" | "under";

export interface LoaderProps {
  appearance?: LoaderAppearance;
  size?: LoaderSize;
  showLabel?: boolean;
  label?: string;
  labelPosition?: LoaderLabelPosition;
}
