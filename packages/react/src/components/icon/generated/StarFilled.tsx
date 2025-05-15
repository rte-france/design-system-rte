import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgStarFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m10 14.396-3.458 2.083a.76.76 0 0 1-.48.125.8.8 0 0 1-.437-.166 1 1 0 0 1-.292-.365.73.73 0 0 1-.041-.49l.916-3.937L3.146 9a.8.8 0 0 1-.23-.896.9.9 0 0 1 .25-.375.87.87 0 0 1 .459-.187l4.042-.354 1.562-3.709a.75.75 0 0 1 .323-.375A.9.9 0 0 1 10 2.98q.23 0 .448.125a.75.75 0 0 1 .323.375l1.562 3.709 4.042.354q.291.041.458.187a.9.9 0 0 1 .25.375.798.798 0 0 1-.23.896l-3.061 2.646.916 3.937a.73.73 0 0 1-.041.49 1 1 0 0 1-.292.364.8.8 0 0 1-.437.167.76.76 0 0 1-.48-.125z"
      />
    </svg>
  );
};
export default SvgStarFilled;
