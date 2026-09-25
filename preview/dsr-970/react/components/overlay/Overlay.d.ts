import { ReactNode } from '../../../../../node_modules/react';
type OverlayPortalProps = {
    children: ReactNode;
    backdropLayer?: boolean;
};
export declare const Overlay: ({ children, backdropLayer }: OverlayPortalProps) => import("react").JSX.Element | null;
export {};
