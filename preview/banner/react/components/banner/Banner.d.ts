interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
    type: "default" | "alert";
    position?: "overlay" | "push";
    title?: string;
    message?: string;
    closable?: boolean;
    showIcon?: boolean;
    onClose?: () => void;
    actionCallback?: () => void;
    actionLabel?: string;
    isOpen?: boolean;
}
declare const Banner: import('../../../../../node_modules/react').ForwardRefExoticComponent<BannerProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Banner;
