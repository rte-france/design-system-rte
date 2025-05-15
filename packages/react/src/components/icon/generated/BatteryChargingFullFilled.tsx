import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBatteryChargingFullFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M13.75 15.833H12.46a.38.38 0 0 1-.365-.218.38.38 0 0 1 .031-.428l2.084-2.979q.103-.124.24-.083.135.042.135.208v1.834h1.291q.25 0 .365.218a.385.385 0 0 1-.031.428l-2.084 2.979q-.105.124-.24.083-.135-.042-.135-.208zm-7.083 2.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V4.167q0-.354.24-.594t.594-.24h1.667V2.5q0-.354.24-.594.239-.24.593-.24h1.667q.354 0 .593.24.24.24.24.594v.833h1.667q.354 0 .593.24.24.24.24.594v5.27a.54.54 0 0 1-.167.396.73.73 0 0 1-.396.209 5 5 0 0 0-1.625.468q-.75.366-1.333.948a5.2 5.2 0 0 0-1.073 1.573A4.8 4.8 0 0 0 9.167 15q0 .626.146 1.208.146.584.437 1.125a.73.73 0 0 1 0 .677.55.55 0 0 1-.52.323z"
      />
    </svg>
  );
};
export default SvgBatteryChargingFullFilled;
