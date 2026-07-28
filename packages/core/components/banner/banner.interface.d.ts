export interface BannerProps {
  type: BannerType;
  message: string;
  position?: BannerPosition;
  title?: string;
  closable?: boolean;
  onClose?: () => void;
  actionCallback?: () => void;
  actionLabel?: string;
  isOpen?: boolean;
  /**
   * When true, applies the compact banner layout (reduced padding + typography).
   */
  isCompact?: boolean;
}

export type BannerType = "info" | "error" | "success" | "warning";
export type BannerPosition = "overlay" | "push";
