import { BadgeProps as BadgePropsCore } from '../../../../core/components/badge/badge.interface';
import { RegularIconIdKey, TogglableIconIdKey } from '../icon/Icon';
export interface BadgeProps extends BadgePropsCore, Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
    children: React.ReactNode;
    icon?: RegularIconIdKey | TogglableIconIdKey;
}
declare const Badge: import('../../../../../node_modules/react').ForwardRefExoticComponent<BadgeProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Badge;
