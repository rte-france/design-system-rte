interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    dropdownId: string;
    trigger: React.ReactNode;
    hasParent?: boolean;
    disabled?: boolean;
    position?: "top" | "bottom" | "left" | "right" | "auto";
    autoOpen?: boolean;
    autoClose?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    isOpen?: boolean;
}
export declare const Dropdown: import('../../../../../node_modules/react').ForwardRefExoticComponent<DropdownProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
