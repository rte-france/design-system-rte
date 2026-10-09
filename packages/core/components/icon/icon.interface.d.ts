export type IconAppearance = "outlined" | "filled";

export interface IconWrapperProps {
  name: string;
  color?: string;
  size?: number;
}

export interface IconProps {
  width?: number;
  height?: number;
  fill?: string;
  description?: string;
  appearance?: IconAppearance;
}
