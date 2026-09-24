import { ReactNode } from '../../../../../node_modules/react';
type OverlayPortalProps = {
    children: ReactNode;
    hideBackgroundFromAssistiveTechnology?: boolean;
};
export declare const Overlay: ({ children, hideBackgroundFromAssistiveTechnology }: OverlayPortalProps) => import("react").JSX.Element | null;
export {};
