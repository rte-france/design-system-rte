import { DropdownItemProps as CoreDropdownItemProps } from '../../../../../core/components/dropdown/dropdown.interface';
interface DropdownItemProps extends Omit<CoreDropdownItemProps, "onClick">, React.HTMLAttributes<HTMLLIElement> {
    onClick?: (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => void;
}
export declare const DropdownItem: ({ label, link, leftIcon, trailingText, disabled, hasSeparator, hasIndent, children, onClick, ...props }: DropdownItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
