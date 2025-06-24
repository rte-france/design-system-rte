import { IconProps as coreIconProps, IconWrapperProps as CoreIconWrapperProps } from '../../../../core/components/icon/icon.interface';
import { IconIds, TogglableIcons } from './IconMap';
export type RegularIconIdKey = keyof typeof IconIds;
export type TogglableIconIdKey = keyof typeof TogglableIcons;
export interface IconProps extends coreIconProps {
    className?: string;
}
interface IconWrapperProps extends CoreIconWrapperProps, Omit<React.SVGProps<SVGSVGElement>, "name" | "width" | "height"> {
    name: RegularIconIdKey | TogglableIconIdKey;
    appearance?: "outlined" | "filled";
}
declare const Icon: ({ name, size, color, appearance, ...props }: IconWrapperProps) => import("react/jsx-runtime").JSX.Element | null;
export default Icon;
