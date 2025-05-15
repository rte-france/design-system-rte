import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBatteryChargingFullOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M13.75 15.833H12.46a.38.38 0 0 1-.365-.218.38.38 0 0 1 .031-.428l2.084-2.979q.103-.124.24-.083.135.042.135.208v1.834h1.291q.25 0 .365.218a.385.385 0 0 1-.031.428l-2.084 2.979q-.105.124-.24.083-.135-.042-.135-.208zm-7.083 2.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V4.167q0-.354.24-.594t.594-.24h1.667V2.5q0-.354.24-.594.239-.24.593-.24h1.667q.354 0 .593.24.24.24.24.594v.833h1.667q.354 0 .593.24.24.24.24.594v5q0 .354-.24.593a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V5h-5v11.667h2.104q.354 0 .594.24.24.239.24.593t-.24.594a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgBatteryChargingFullOutlined;
