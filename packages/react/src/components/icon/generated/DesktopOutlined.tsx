import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgDesktopOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M8.333 15.833v-1.666h-5q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177t1.177-.49h13.334q.687 0 1.177.49.49.489.49 1.177V12.5q0 .687-.49 1.177t-1.178.49h-5v1.666h.834q.354 0 .594.24t.24.594-.24.593a.8.8 0 0 1-.594.24h-5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24zm-5-3.333h13.334V4.167H3.332z"
      />
    </svg>
  );
};
export default SvgDesktopOutlined;
