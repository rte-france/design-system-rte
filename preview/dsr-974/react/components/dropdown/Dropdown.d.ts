import { DropdownProps as CoreDropdownProps } from '../../../../core/components/dropdown/dropdown.interface';
export type OverlayPriority = "low" | "high";
export interface DropdownProps extends CoreDropdownProps, React.HTMLAttributes<HTMLDivElement> {
    trigger: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    isList?: boolean;
    hasMaxWidth?: boolean;
    overlayLevel?: OverlayPriority;
    maxHeight?: number | string;
}
export declare const Dropdown: import('../../../../../node_modules/react').ForwardRefExoticComponent<DropdownProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Dropdown;
