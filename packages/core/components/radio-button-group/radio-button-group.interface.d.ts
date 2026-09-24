export interface RadioButtonGroupProps {
  groupName: string;
  items: {
    label: string;
    value: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
  }[];
  direction?: import("../common/common-types").Direction;
  showItemsLabel?: boolean;
  groupTitle?: string;
  groupHelpText?: string;
  errorMessage?: string;
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onValueChange?: (value: string) => void;
  selectedValue?: string;
  required?: boolean;
  showLabelRequirement?: boolean;
}
