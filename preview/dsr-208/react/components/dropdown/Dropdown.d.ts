import { DropdownProps as CoreDropdownProps } from '../../../../core/components/dropdown/dropdown.interface';
interface DropdownProps extends CoreDropdownProps, React.HTMLAttributes<HTMLDivElement> {
    trigger: React.ReactNode;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}
export declare const Dropdown: import('../../../../../node_modules/react').ForwardRefExoticComponent<DropdownProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
