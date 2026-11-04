import { GetSegmentTabIndexParams, SegmentOptions, SegmentProps } from "./segmented-control.interface";

export function getSegmentPosition(optionIndex: number, numberOfOptions: number): SegmentProps["position"] {
  if (numberOfOptions === 2) {
    return optionIndex === 0 ? "left" : "right";
  }
  if (optionIndex === 0) {
    return "left";
  }
  if (optionIndex === numberOfOptions - 1) {
    return "right";
  }
  return "middle";
}

export function getSegmentTabIndex({
  segmentId,
  selectedSegmentId,
  focusedSegmentId,
  fallbackTabStopSegmentId,
}: GetSegmentTabIndexParams): 0 | -1 {
  const tabStopSegmentId = focusedSegmentId ?? selectedSegmentId ?? fallbackTabStopSegmentId;
  return tabStopSegmentId && tabStopSegmentId === segmentId ? 0 : -1;
}

export function focusNextSegmentElement(currentSegmentIndex: number, allSegmentElements: HTMLElement[]): void {
  const nextIndex = currentSegmentIndex < allSegmentElements.length - 1 ? currentSegmentIndex + 1 : 0;
  allSegmentElements[nextIndex].focus();
}

export function focusPreviousSegmentElement(currentSegmentIndex: number, allSegmentElements: HTMLElement[]): void {
  const previousIndex = currentSegmentIndex > 0 ? currentSegmentIndex - 1 : allSegmentElements.length - 1;

  allSegmentElements[previousIndex].focus();
}

export function isValidSegmentedControlOptions(options: SegmentOptions[]): boolean {
  if (options.length <= 1 || options.length > 3) {
    console.warn("SegmentedControl: 'options' should have 2 or 3 items.");
    return false;
  }

  const iconCount = options.filter((option) => option.icon).length;
  if (iconCount > 0 && iconCount < options.length) {
    console.warn("SegmentedControl: All options must either have an icon or none.");
    return false;
  }

  const optionMissingLabel = options.find((option) => !option.labelText && !option.icon);
  if (optionMissingLabel) {
    console.warn(`SegmentedControl: segment "${optionMissingLabel.id}" must define labelText or icon.`);
    return false;
  }

  return true;
}
