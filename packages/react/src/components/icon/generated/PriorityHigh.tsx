import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPriorityHigh = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 17.5q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177q0-.687.49-1.177t1.177-.49 1.177.49q.49.49.49 1.177t-.49 1.177T10 17.5m0-5q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177T10 2.5t1.177.49q.49.489.49 1.177v6.666q0 .688-.49 1.177T10 12.5"
      />
    </svg>
  );
};
export default SvgPriorityHigh;
