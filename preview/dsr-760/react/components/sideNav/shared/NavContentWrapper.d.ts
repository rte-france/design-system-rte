import { ReactNode, KeyboardEvent } from '../../../../../../node_modules/react';
interface NavContentWrapperProps {
    link?: string;
    label: string;
    tabIndex: number;
    onKeyDown?: (e: KeyboardEvent<HTMLElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onClick?: () => void;
    children: ReactNode;
    styleType?: "item" | "menu";
}
declare function NavContentWrapper({ link, label, tabIndex, onKeyDown, onFocus, onBlur, onClick, children, styleType, }: NavContentWrapperProps): ReactNode;
export default NavContentWrapper;
