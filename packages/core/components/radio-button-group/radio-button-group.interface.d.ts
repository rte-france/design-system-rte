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
  groupTitleText?: string;
  groupHelpText?: string;
  errorText?: string;
  isError?: boolean;
  disabled?: boolean;
  isReadOnly?: boolean;
  onValueChange?: (value: string) => void;
  selectedValue?: string;
  required?: boolean;
  showLabelRequirement?: boolean;
}
