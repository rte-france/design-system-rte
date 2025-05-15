import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgChartTableFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M2.5 6.667v-2.5q0-.688.49-1.177.489-.49 1.177-.49h11.666q.688 0 1.177.49.49.489.49 1.177v2.5zM4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177v-7.5h3.75V17.5zm9.583 0V8.333h3.75v7.5q0 .688-.49 1.177-.489.49-1.177.49zm-5.833 0V8.333h4.166V17.5z"
      />
    </svg>
  );
};
export default SvgChartTableFilled;
