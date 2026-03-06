type DrawerPosition = "modal" | "responsive";

export interface DrawerProps {
  id?: string;
  title?: string;
  icon?: string;
  iconAppearance?: "outlined" | "filled";
  isOpen: boolean;
  onClose: () => void;
  onClickToggle: () => void;
  closeOnOverlayClick?: boolean;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  isCollapsible?: boolean;
  position?: DrawerPosition;
  fixedHeader?: boolean;
  closeOnEscape?: boolean;
  isClosable?: boolean;
}
