import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowAltUp = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 18.333a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V4.854l-3.25 3.23a.81.81 0 0 1-.572.239.78.78 0 0 1-.594-.24.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.583L9.417 2.25a.7.7 0 0 1 .27-.177A.9.9 0 0 1 10 2.02q.166 0 .313.052a.7.7 0 0 1 .27.177l4.667 4.667q.23.228.23.573a.85.85 0 0 1-.23.593.8.8 0 0 1-.594.25.81.81 0 0 1-.594-.25l-3.229-3.229V17.5q0 .354-.24.594a.8.8 0 0 1-.593.24Z"
      />
    </svg>
  );
};
export default SvgArrowAltUp;
