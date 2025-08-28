type DropdownOptionItem = DropdownItemOption | DropdownItemOptionCategorized;
interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    dropdownId: string;
    trigger: React.ReactNode;
    options: DropdownOptionItem[];
    hasParent?: boolean;
    disabled?: boolean;
    position?: "top" | "bottom" | "left" | "right" | "auto";
}
interface DropdownItemOptionCategorized {
    category: string;
    values: DropdownOptionItem[];
}
interface DropdownItemOption {
    label: string;
    leftIcon?: string;
    subOptions?: DropdownOptionItem[];
    trailingText?: string;
    disabled?: boolean;
}
interface DropdownItemProps {
    option: DropdownItemOption;
    parentId: string;
}
export declare const Dropdown: import('../../../../../node_modules/react').ForwardRefExoticComponent<DropdownProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export declare const DropdownItem: ({ option, parentId }: DropdownItemProps) => import("react/jsx-runtime").JSX.Element;
export {};
