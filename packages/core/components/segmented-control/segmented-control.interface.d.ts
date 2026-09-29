import { BadgeHolderProps } from "../badge/badge.interface";

export interface SegmentedControlProps {
  options: SegmentOptions[];
  onChange: (id: string) => void;
  selectedSegment?: string;
  appearance?: "brand" | "neutral";
  isCompact?: boolean;
}

export interface SegmentOptions extends BadgeHolderProps {
  id: string;
  labelText: string;
  icon?: string;
}

export interface SegmentProps extends BadgeHolderProps {
  id: string;
  position: "left" | "middle" | "right";
  labelText?: string;
  icon?: string;
  isSelected?: boolean;
  appearance?: "brand" | "neutral";
  isCompact?: boolean;
}
