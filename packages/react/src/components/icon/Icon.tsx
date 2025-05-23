import { IconWrapperProps as CoreIconWrapperProps } from '@design-system-rte/core/components/icon/icon.interface';
import { IconIds, TogglableIcons } from './IconMap';

export type RegularIconIdKey = keyof typeof IconIds;
export type TogglableIconIdKey = keyof typeof TogglableIcons;

interface IconWrapperProps extends CoreIconWrapperProps {
  name: RegularIconIdKey | TogglableIconIdKey;
  appearance?: 'outlined' | 'filled';
}

const Icon = ({ name, size, color, appearance }: IconWrapperProps) => {
  const toggableIcon = TogglableIcons[name as TogglableIconIdKey];
  if (toggableIcon) {
    const [OutlinedIcon, FilledIcon] = toggableIcon;
    return appearance === 'filled' ? (
      <FilledIcon width={size} height={size} fill={color} />
    ) : (
      <OutlinedIcon width={size} height={size} fill={color} />
    );
  } else {
    const Icon = IconIds[name as RegularIconIdKey];
    if (!Icon) {
      console.warn(`Icon with name "${name}" not found.`);
      return null;
    }
    return <Icon width={size} height={size} fill={color} />;
  }
};

export default Icon;
