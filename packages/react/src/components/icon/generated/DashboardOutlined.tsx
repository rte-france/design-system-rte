import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgDashboardOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10.833 6.667V3.333q0-.354.24-.593.24-.24.594-.24h5q.354 0 .593.24.24.24.24.593v3.334q0 .354-.24.593a.8.8 0 0 1-.593.24h-5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593M2.5 10V3.333q0-.354.24-.593.24-.24.593-.24h5q.354 0 .594.24t.24.593V10q0 .354-.24.594a.8.8 0 0 1-.594.24h-5a.8.8 0 0 1-.593-.24A.8.8 0 0 1 2.5 10m8.333 6.667V10q0-.354.24-.594t.594-.24h5q.354 0 .593.24.24.24.24.594v6.667q0 .354-.24.593a.8.8 0 0 1-.593.24h-5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593m-8.333 0v-3.334q0-.354.24-.593.24-.24.593-.24h5q.354 0 .594.24t.24.593v3.334q0 .354-.24.593a.8.8 0 0 1-.594.24h-5a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593m1.667-7.5H7.5v-5H4.167zm8.333 6.666h3.333v-5H12.5zm0-10h3.333V4.167H12.5zm-8.333 10H7.5v-1.666H4.167z"
      />
    </svg>
  );
};
export default SvgDashboardOutlined;
