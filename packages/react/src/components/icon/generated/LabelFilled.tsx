import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLabelFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M3.333 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 1.666 15V5q0-.687.49-1.177t1.177-.49H12.5A1.66 1.66 0 0 1 13.833 4l3.75 5q.334.438.334 1t-.334 1l-3.75 5a1.656 1.656 0 0 1-1.333.667z"
      />
    </svg>
  );
};
export default SvgLabelFilled;
