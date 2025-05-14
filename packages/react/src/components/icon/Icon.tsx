import { IconIds } from './IconMap';

export type IconIdKey = keyof typeof IconIds;

const Icon = ({ name, size, fill = 'currentColor' }: { name: IconIdKey; size?: number; fill?: string }) => {
  const Icon = IconIds[name as IconIdKey];

  return <Icon width={size} height={size} fill={fill} />;
};

export default Icon;
