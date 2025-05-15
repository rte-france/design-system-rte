import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBatteryAlertFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M6.667 18.333a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V4.167q0-.354.24-.594t.594-.24h1.667V2.5q0-.354.24-.594.239-.24.593-.24h1.667q.354 0 .593.24.24.24.24.594v.833h1.667q.354 0 .593.24.24.24.24.594V17.5q0 .354-.24.594a.8.8 0 0 1-.593.24zM10 11.667q.354 0 .594-.24t.24-.594V7.5a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594v3.333q0 .354.24.594t.594.24M10 15q.354 0 .594-.24t.24-.593a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594q0 .354.24.593.24.24.594.24"
      />
    </svg>
  );
};
export default SvgBatteryAlertFilled;
