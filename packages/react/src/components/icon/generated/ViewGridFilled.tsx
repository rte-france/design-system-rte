import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgViewGridFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 9.167q-.688 0-1.177-.49A1.6 1.6 0 0 1 2.5 7.5V4.167q0-.688.49-1.177.489-.49 1.177-.49H7.5q.687 0 1.177.49.49.489.49 1.177V7.5q0 .687-.49 1.177t-1.177.49zm0 8.333q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V12.5q0-.687.49-1.177.489-.49 1.177-.49H7.5q.687 0 1.177.49t.49 1.177v3.333q0 .688-.49 1.177T7.5 17.5zM12.5 9.167q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177T12.5 2.5h3.333q.688 0 1.177.49.49.489.49 1.177V7.5q0 .687-.49 1.177-.489.49-1.177.49zm0 8.333q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V12.5q0-.687.49-1.177t1.177-.49h3.333q.688 0 1.177.49t.49 1.177v3.333q0 .688-.49 1.177-.489.49-1.177.49z"
      />
    </svg>
  );
};
export default SvgViewGridFilled;
