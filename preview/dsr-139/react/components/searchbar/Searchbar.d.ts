import { SearchBarProps as CoreSearchBarProps } from '../../../../core/components/searchbar/searchbar.interface';
import { InputHTMLAttributes } from '../../../../../node_modules/react';
export interface SearchbarRef {
    open: () => void;
    close: () => void;
}
interface SearchbarProps extends CoreSearchBarProps, Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "onChange" | "value" | "defaultValue" | "placeholder"> {
    onSearch?: (input: string | undefined) => void;
    onChange?: (input: string | undefined) => void;
    onOptionSelect?: (option: string) => void;
    placeholder?: string;
    onOpenChange?: (isOpen: boolean) => void;
}
declare const Searchbar: import('../../../../../node_modules/react').ForwardRefExoticComponent<SearchbarProps & import('../../../../../node_modules/react').RefAttributes<SearchbarRef>>;
export default Searchbar;
