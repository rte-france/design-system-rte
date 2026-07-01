import { KeyboardEvent } from '../../../../../../node_modules/react';
interface UseNavKeyboardOptions {
    onEnterOrSpace?: () => void;
    onEscape?: () => void;
    includeArrowKeys?: boolean;
    includeEscape?: boolean;
}
declare function useNavKeyboard<T extends HTMLElement = HTMLElement>({ onEnterOrSpace, onEscape, includeArrowKeys, includeEscape, }?: UseNavKeyboardOptions): {
    onKeyDown: (e: KeyboardEvent<T>) => void;
};
export default useNavKeyboard;
