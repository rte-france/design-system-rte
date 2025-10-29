export interface DropdownProps {
  dropdownId: string;
  hasParent?: boolean;
  disabled?: boolean;
  position?: import("../common/common-types").Position;
  alignment?: import("../common/common-types").Alignment;
  autoOpen?: boolean;
  autoClose?: boolean;
  onClose?: () => void;
  isOpen?: boolean;
  offset?: number;
}

export interface DropdownItemProps {
  label?: string;
  leftIcon?: string;
  trailingText?: string;
  disabled?: boolean;
  hasSeparator?: boolean;
  hasIndent?: boolean;
  link?: string;
  onClick?: () => void;
}
