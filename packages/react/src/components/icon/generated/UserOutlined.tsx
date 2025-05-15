import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgUserOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 10a3.2 3.2 0 0 1-2.354-.98 3.2 3.2 0 0 1-.98-2.353q0-1.375.98-2.355A3.2 3.2 0 0 1 10 3.333a3.2 3.2 0 0 1 2.354.98 3.2 3.2 0 0 1 .98 2.354 3.2 3.2 0 0 1-.98 2.354A3.2 3.2 0 0 1 10 10m-6.667 5v-.667q0-.708.365-1.302a2.43 2.43 0 0 1 .969-.906 12.4 12.4 0 0 1 2.625-.969A11.5 11.5 0 0 1 10 10.833q1.376 0 2.708.323 1.334.322 2.625.969.604.312.969.906t.365 1.302V15q0 .687-.49 1.177t-1.177.49H5q-.687 0-1.177-.49A1.6 1.6 0 0 1 3.333 15M5 15h10v-.667a.81.81 0 0 0-.417-.708 11 11 0 0 0-2.27-.844 9.7 9.7 0 0 0-4.626 0q-1.145.282-2.27.844a.81.81 0 0 0-.417.708zm5-6.667q.687 0 1.177-.49.49-.489.49-1.176 0-.688-.49-1.177A1.6 1.6 0 0 0 10 5q-.687 0-1.177.49-.49.489-.49 1.177 0 .687.49 1.177t1.177.49"
      />
    </svg>
  );
};
export default SvgUserOutlined;
