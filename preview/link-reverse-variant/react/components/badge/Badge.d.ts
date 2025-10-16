import { BadgeProps as BadgePropsCore } from '../../../../core/components/badge/badge.interface';
export interface BadgeProps extends BadgePropsCore, Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "content"> {
    children?: React.ReactNode;
    icon?: string;
}
declare const Badge: import('../../../../../node_modules/react').ForwardRefExoticComponent<BadgeProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export default Badge;
