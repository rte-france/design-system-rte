export interface BannerProps {
  type: BannerType;
  message: string;
  position?: BannerPosition;
  title?: string;
  closable?: boolean;
  showIcon?: boolean;
  onClose?: () => void;
  actionCallback?: () => void;
  actionLabel?: string;
  isOpen?: boolean;
}

export type BannerType = "default" | "alert";
export type BannerPosition = "overlay" | "push";
