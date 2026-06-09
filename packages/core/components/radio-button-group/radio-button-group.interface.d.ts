export interface RadioButtonGroupProps {
  groupName: string;
  items: {
    label: string;
    value: string;
  }[];
  direction?: import("../common/common-types").Direction;
  showItemsLabel?: boolean;
  groupTitle?: string;
  showGroupTitle?: boolean;
  groupHelpText?: string;
  showHelpText?: boolean;
  errorMessage?: string;
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onValueChange?: (value: string) => void;
  selectedValue?: string;
}
