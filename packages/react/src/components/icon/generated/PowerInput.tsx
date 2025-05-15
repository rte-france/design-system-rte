import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPowerInput = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M2.5 12.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24H5q.354 0 .594.24t.24.594-.24.593A.8.8 0 0 1 5 12.5zm5.833 0a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h2.5q.354 0 .594.24t.24.594-.24.593a.8.8 0 0 1-.594.24zm5.833 0a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.593-.24h2.5q.355 0 .594.24.24.24.24.594t-.24.593a.8.8 0 0 1-.594.24zM2.5 9.167a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594q0-.354.24-.593.24-.24.594-.24h14.167q.354 0 .593.24.24.24.24.593 0 .354-.24.594a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgPowerInput;
