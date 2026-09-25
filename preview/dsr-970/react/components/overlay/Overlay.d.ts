import { ReactNode } from '../../../../../node_modules/react';
type OverlayPortalProps = {
    children: ReactNode;
    hideBackgroundFromAssistiveTechnology?: boolean;
    backgroundHideReady?: boolean;
};
export declare const Overlay: ({ children, hideBackgroundFromAssistiveTechnology, backgroundHideReady, }: OverlayPortalProps) => import("react").JSX.Element | null;
export {};
