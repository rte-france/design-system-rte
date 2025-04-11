import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';

export default function Icon({ name, size = 24 }: IconProps) {
  return (
    <span
      data-testid={`icon-${name}`}
      className="material-symbols-rounded"
      style={{
        fontSize: size,
        color: 'inherit',
      }}
    >
      {name}
    </span>
  );
}
