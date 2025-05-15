import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLaptopOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M1.667 17.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h16.667q.354 0 .593.24.24.24.24.594t-.24.593a.8.8 0 0 1-.593.24zM3.333 15q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.491-.49 1.177-.49h13.334q.687 0 1.177.49.49.489.49 1.177v9.166q0 .688-.49 1.177t-1.177.49zm0-1.667h13.334V4.167H3.334z"
      />
    </svg>
  );
};
export default SvgLaptopOutlined;
