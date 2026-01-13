import { SplitButtonProps as CoreSplitButtonProps, SplitButtonItemProps as CoreSplitButtonOptionProps } from '../../../../core/components/split-button/split-button.interface';
import { ButtonHTMLAttributes, KeyboardEvent, MouseEvent } from '../../../../../node_modules/react';
import { RegularIcons, TogglableIcons } from '../icon/IconMap';
interface SplitButtonOption extends CoreSplitButtonOptionProps {
    onClick?: (e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => void;
}
interface SplitButtonProps extends Omit<CoreSplitButtonProps, "options">, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    icon?: keyof typeof RegularIcons | keyof typeof TogglableIcons;
    options: SplitButtonOption[];
}
declare const SplitButton: import('../../../../../node_modules/react').ForwardRefExoticComponent<SplitButtonProps & import('../../../../../node_modules/react').RefAttributes<HTMLElement | HTMLButtonElement>>;
export default SplitButton;
