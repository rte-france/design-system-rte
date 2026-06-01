import { DropdownProps as CoreDropdownProps } from '../../../../core/components/dropdown/dropdown.interface';
export interface BaseDropdownProps extends CoreDropdownProps, React.HTMLAttributes<HTMLDivElement> {
    trigger: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    isList?: boolean;
    hasMaxWidth?: boolean;
}
export declare const BaseDropdown: import('../../../../../node_modules/react').ForwardRefExoticComponent<BaseDropdownProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
