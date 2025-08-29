interface DropdownItemProps extends React.HTMLAttributes<HTMLLIElement> {
    label?: string;
    leftIcon?: string;
    trailingText?: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
    withSeparator?: boolean;
}
export declare const DropdownItem: ({ label, leftIcon, trailingText, disabled, onClick, withSeparator, children, ...props }: DropdownItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
