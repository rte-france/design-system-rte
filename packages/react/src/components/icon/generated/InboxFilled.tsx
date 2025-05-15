import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgInboxFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      width={width}
      height={height}
      role="img"
      {...props}
    >
      <path
        fill={fill}
        d="M4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h11.666q.688 0 1.177.49.49.489.49 1.177v11.666q0 .688-.49 1.177-.489.49-1.177.49zM10 13.333q.666 0 1.23-.343.562-.345.916-.907a1 1 0 0 1 .312-.302.8.8 0 0 1 .417-.114h2.958v-7.5H4.167v7.5h2.958q.23 0 .417.114.188.115.312.302.354.562.917.907.563.343 1.229.343"
      />
    </svg>
  );
};
export default SvgInboxFilled;
