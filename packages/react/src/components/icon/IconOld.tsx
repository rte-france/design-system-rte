import { IconPropsBis } from '@design-system-rte/core/components/icon/icon.interface';

export default function IconOld({ name, size = 24 }: IconPropsBis) {
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
