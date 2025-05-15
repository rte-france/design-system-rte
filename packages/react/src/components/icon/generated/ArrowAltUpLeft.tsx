import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowAltUpLeft = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.833 7v4.667q0 .354-.24.593A.8.8 0 0 1 5 12.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V5q0-.354.24-.594T5 4.166h6.667q.354 0 .593.24.24.24.24.594t-.24.594a.8.8 0 0 1-.593.24H7l9.083 9.083a.8.8 0 0 1 .23.583.8.8 0 0 1-.23.583.8.8 0 0 1-.583.23.8.8 0 0 1-.583-.23z"
      />
    </svg>
  );
};
export default SvgArrowAltUpLeft;
