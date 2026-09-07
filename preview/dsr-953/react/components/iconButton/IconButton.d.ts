import { IconButtonProps as CoreIconButtonProps } from '../../../../core/components/button/icon-button/icon-button.interface';
import { RegularIconIdKey, TogglableIconIdKey } from '../icon/Icon';
interface IconButtonProps extends Omit<CoreIconButtonProps, "disabled" | "name">, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
    name: RegularIconIdKey | TogglableIconIdKey;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const IconButton: import('../../../../../node_modules/react').ForwardRefExoticComponent<IconButtonProps & import('../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default IconButton;
