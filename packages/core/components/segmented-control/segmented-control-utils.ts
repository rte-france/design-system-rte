import { SegmentProps } from "./segmented-control.interface";

export const getSegmentPosition = (optionIndex: number, numberOfOptions: number): SegmentProps["position"] => {
  if (numberOfOptions === 2) return optionIndex === 0 ? "left" : "right";
  if (optionIndex === 0) return "left";
  if (optionIndex === numberOfOptions - 1) return "right";
  return "middle";
};
