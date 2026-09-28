import { ReactNode } from '../../../../../node_modules/react';
type OverlayPortalProps = {
    children: ReactNode;
    hasBackdrop?: boolean;
};
export declare const Overlay: ({ children, hasBackdrop }: OverlayPortalProps) => import("react").JSX.Element | null;
export {};
