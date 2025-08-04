export interface SegmentedControlProps {
  options: SegmentOptions[];
  onChange: (id: string) => void;
  selectedSegment?: string;
}

export interface SegmentOptions {
  id: string;
  label: string;
  icon?: string;
  iconAppearance?: "outlined" | "filled";
}

export interface SegmentProps {
  id: string;
  position: "left" | "middle" | "right";
  label?: string;
  icon?: string;
  iconAppearance?: "outlined" | "filled";
  selected?: boolean;
}
