export interface ModalProps {
  id: string;
  title: string;
  closeOnOverlayClick?: boolean;
  isOpen: boolean;
  icon?: string;
  iconAppearance?: "outlined" | "filled";
  description?: string;
  size?: import("../common/common-types").Size;
}
