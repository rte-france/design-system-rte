import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgMoreHoriz = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5 11.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 3.333 10q0-.687.49-1.177T5 8.333t1.177.49.49 1.177-.49 1.177-1.177.49m5 0q-.687 0-1.177-.49A1.6 1.6 0 0 1 8.333 10q0-.687.49-1.177T10 8.333t1.177.49.49 1.177-.49 1.177-1.177.49m5 0q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177q0-.687.49-1.177T15 8.333t1.177.49.49 1.177-.49 1.177-1.177.49"
      />
    </svg>
  );
};
export default SvgMoreHoriz;
