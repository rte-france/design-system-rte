export type ModalSize = "xs" | "s" | "m" | "l" | "xl";

export interface ModalProps {
  id: string;
  title: string;
  closeOnOverlayClick?: boolean;
  isOpen: boolean;
  icon?: string;
  iconAppearance?: "outlined" | "filled";
  description?: string;
  size?: ModalSize;
}
