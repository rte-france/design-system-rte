import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgMailOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M3.333 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 1.666 15V5q0-.687.49-1.177.491-.49 1.177-.49h13.334q.687 0 1.177.49T18.334 5v10q0 .687-.49 1.177t-1.177.49zm13.334-10-6.23 3.896a.87.87 0 0 1-.437.124.868.868 0 0 1-.438-.125L3.334 6.668V15h13.334zM10 9.167 16.667 5H3.333zM3.333 6.875v-1.23.022-.01z"
      />
    </svg>
  );
};
export default SvgMailOutlined;
