import { SearchBarProps as CoreSearchBarProps } from '../../../../core/components/searchbar/searchbar.interface';
import { InputHTMLAttributes } from '../../../../../node_modules/react';
interface SearchbarProps extends CoreSearchBarProps, Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "onChange" | "value" | "defaultValue" | "placeholder"> {
    onSearch?: (input: string | undefined) => void;
    onChange?: (input: string | undefined) => void;
    onClear?: () => void;
}
declare const Searchbar: import('../../../../../node_modules/react').ForwardRefExoticComponent<SearchbarProps & import('../../../../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default Searchbar;
