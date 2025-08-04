export interface SegmentedControlProps {
  options: Omit<SegmentProps, "position" | "selected">[];
  onChange: (id: string) => void;
  selectedSegment?: string;
}

export interface SegmentProps {
  id: string;
  label?: string;
  icon?: string;
  iconAppearance?: "outlined" | "filled";
  position: "left" | "middle" | "right";
  selected?: boolean;
}
