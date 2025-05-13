import { IconIds } from './IconMap';

export type IconIdKey = keyof typeof IconIds;

const Icon = ({ name, size }: { name: IconIdKey; size?: number }) => {
  const Icon = IconIds[name as IconIdKey];

  return <Icon width={size} height={size} fill="currentColor" />;
};

export default Icon;
