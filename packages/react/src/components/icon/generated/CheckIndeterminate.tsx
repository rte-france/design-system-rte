import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCheckIndeterminate = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.833 10.833a.8.8 0 0 1-.593-.24A.8.8 0 0 1 5 10q0-.354.24-.594t.593-.24h8.334q.354 0 .593.24.24.24.24.594c0 .354-.08.434-.24.594a.8.8 0 0 1-.593.24z"
      />
    </svg>
  );
};
export default SvgCheckIndeterminate;
