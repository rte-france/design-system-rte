import { BadgeHolderProps } from "../badge/badge.interface";

export interface FocusAdjacentOutsideSegmentOptions {
  focusedIndex: number;
  focusableElements: HTMLElement[];
  segmentClass: string;
  radiogroupElement: HTMLElement;
}

export interface SegmentedControlProps {
  options: SegmentOptions[];
  onChange: (id: string) => void;
  selectedSegment?: string;
  appearance?: "brand" | "neutral";
  isCompact?: boolean;
}

export interface SegmentOptions extends BadgeHolderProps {
  id: string;
  labelText?: string;
  icon?: string;
  ariaLabel?: string;
}

export interface SegmentProps extends BadgeHolderProps {
  id: string;
  position: "left" | "middle" | "right";
  labelText?: string;
  icon?: string;
  ariaLabel?: string;
  isSelected?: boolean;
  appearance?: "brand" | "neutral";
  isCompact?: boolean;
}
