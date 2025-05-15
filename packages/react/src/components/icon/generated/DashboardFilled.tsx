import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgDashboardFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M11.667 7.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V3.333q0-.354.24-.593.24-.24.594-.24h5q.354 0 .593.24.24.24.24.593v3.334q0 .354-.24.593a.8.8 0 0 1-.593.24zm-8.334 3.333a.8.8 0 0 1-.593-.24A.8.8 0 0 1 2.5 10V3.333q0-.354.24-.593.24-.24.593-.24h5q.354 0 .594.24t.24.593V10q0 .354-.24.594a.8.8 0 0 1-.594.24zm8.334 6.667a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V10q0-.354.24-.594t.594-.24h5q.354 0 .593.24.24.24.24.594v6.667q0 .354-.24.593a.8.8 0 0 1-.593.24zm-8.334 0a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593v-3.334q0-.354.24-.593.24-.24.593-.24h5q.354 0 .594.24t.24.593v3.334q0 .354-.24.593a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgDashboardFilled;
