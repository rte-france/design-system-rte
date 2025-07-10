import { SplitButtonProps as CoreSplitButtonProps } from '../../../../core/components/split-button/split-button.interface';
import { default as React } from '../../../../../node_modules/react';
import { IconIds, TogglableIcons } from '../icon/IconMap';
interface SplitButtonProps extends CoreSplitButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "children"> {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    icon?: keyof typeof IconIds | keyof typeof TogglableIcons;
}
declare const SplitButton: React.ForwardRefExoticComponent<SplitButtonProps & React.RefAttributes<HTMLButtonElement | HTMLElement>>;
export default SplitButton;
