import { IconWrapperProps } from '@design-system-rte/core/components/icon/icon.interface';
import { IconIds } from './IconMap';

export type IconIdKey = keyof typeof IconIds;

const Icon = ({ name, size, color }: IconWrapperProps) => {
  const Icon = IconIds[name as IconIdKey];

  return <Icon width={size} height={size} fill={color} />;
};

export default Icon;
