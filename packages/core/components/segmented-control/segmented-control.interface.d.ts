import { BadgeHolderProps } from "../badge/badge.interface";

export interface SegmentedControlProps {
  options: SegmentOptions[];
  onChange: (id: string) => void;
  selectedSegment?: string;
}

export interface SegmentOptions extends BadgeHolderProps {
  id: string;
  label: string;
  icon?: string;
}

export interface SegmentProps extends BadgeHolderProps {
  id: string;
  position: "left" | "middle" | "right";
  label?: string;
  icon?: string;
  isSelected?: boolean;
}
