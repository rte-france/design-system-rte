import { IconButtonToggleProps as CoreIconButtonToggleProps } from '../../../../core/components/button/icon-button/icon-button.interface';
import { TogglableIconIdKey } from '../icon/Icon';
interface IconButtonToggleProps extends Omit<CoreIconButtonToggleProps, "icon">, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
    name: TogglableIconIdKey;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    defaultSelected?: boolean;
}
declare const IconButtonToggle: import('../../../../../node_modules/react').ForwardRefExoticComponent<IconButtonToggleProps & import('../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default IconButtonToggle;
