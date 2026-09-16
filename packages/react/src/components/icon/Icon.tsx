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
  extends CoreIconWrapperProps, Omit<React.SVGProps<SVGSVGElement>, "name" | "width" | "height"> {
  name: string;
  appearance?: "outlined" | "filled";
}

const Icon = ({ name, size, color, appearance, ...props }: IconWrapperProps) => {
  const { "aria-hidden": ariaHidden = true, ...svgProps } = props;
  const commonSvgProps = { width: size, height: size, fill: color, "aria-hidden": ariaHidden, ...svgProps };

  if (isValidIconName(name)) {
    const togglableIcon = TogglableIcons[name as TogglableIconIdKey];
    if (togglableIcon) {
      const [OutlinedIcon, FilledIcon] = togglableIcon;
      return appearance === "filled" ? <FilledIcon {...commonSvgProps} /> : <OutlinedIcon {...commonSvgProps} />;
    } else {
      const Icon = RegularIcons[name as RegularIconIdKey];
      return <Icon {...commonSvgProps} />;
    }
  } else {
    console.warn(`Icon: Invalid icon name "${name}". Please use a valid icon key.`);
    return null;
  }
};

export default Icon;
