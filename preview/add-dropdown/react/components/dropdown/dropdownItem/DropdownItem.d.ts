interface DropdownItemProps extends React.HTMLAttributes<HTMLLIElement> {
    label?: string;
    leftIcon?: string;
    trailingText?: string;
    disabled?: boolean;
    hasSeparator?: boolean;
    hasIndent?: boolean;
    onClick?: (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEventHandler<HTMLLIElement>) => void;
}
export declare const DropdownItem: ({ label, leftIcon, trailingText, disabled, hasSeparator, hasIndent, children, onClick, ...props }: DropdownItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
