export interface CheckboxGroupProps {
  items: string[];
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
}
