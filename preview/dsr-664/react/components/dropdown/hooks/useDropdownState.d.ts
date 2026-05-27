export declare const useDropdownState: (dropdownId?: string) => {
    dropdownId: string;
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
