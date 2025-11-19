export type ToastType = "info" | "success" | "warning" | "error" | "neutral";

export type ToastDuration = "short" | "medium" | "long";

export type ToastPlacement = "top-right" | "top-left" | "bottom-right" | "bottom-left" | "bottom-center";

export interface ToastProps {
  message: string;
  isOpen?: boolean;
  type?: ToastType;
  duration?: ToastDuration;
  isVisible?: boolean;
  onClose?: () => void;
  placement?: ToastPlacement;
  closable?: boolean;
  autoDismiss?: boolean;
}
