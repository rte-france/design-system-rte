import {
  IconProps as coreIconProps,
  IconWrapperProps as CoreIconWrapperProps,
} from "@design-system-rte/core/components/icon/icon.interface";

import { RegularIcons, isValidIconName, TogglableIcons } from "./IconMap";

export type RegularIconIdKey = keyof typeof RegularIcons;
export type TogglableIconIdKey = keyof typeof TogglableIcons;

export interface IconProps extends coreIconProps {
  className?: string;
}

interface IconWrapperProps
  extends CoreIconWrapperProps,
    Omit<React.SVGProps<SVGSVGElement>, "name" | "width" | "height"> {
  name: RegularIconIdKey | TogglableIconIdKey;
  appearance?: "outlined" | "filled";
}

const Icon = ({ name, size, color, appearance, ...props }: IconWrapperProps) => {
  if (isValidIconName(name)) {
    const toggableIcon = TogglableIcons[name as TogglableIconIdKey];
    if (toggableIcon) {
      const [OutlinedIcon, FilledIcon] = toggableIcon;
      return appearance === "filled" ? (
        <FilledIcon width={size} height={size} fill={color} {...props} />
      ) : (
        <OutlinedIcon width={size} height={size} fill={color} {...props} />
      );
    } else {
      const Icon = RegularIcons[name as RegularIconIdKey];
      return <Icon width={size} height={size} fill={color} {...props} />;
    }
  } else {
    console.warn(`Icon: Invalid icon name "${name}". Please use a valid icon key.`);
    return null;
  }
};

export default Icon;
