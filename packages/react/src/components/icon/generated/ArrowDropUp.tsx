import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowDropUp = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m10.438 7.937 3.02 3.021a.4.4 0 0 1 .125.292.42.42 0 0 1-.114.292.4.4 0 0 1-.302.125H6.833a.4.4 0 0 1-.302-.125.42.42 0 0 1-.114-.292q0-.042.125-.292l3.02-3.02a.6.6 0 0 1 .209-.146A.6.6 0 0 1 10 7.75q.125 0 .23.042a.6.6 0 0 1 .207.145Z"
      />
    </svg>
  );
};
export default SvgArrowDropUp;
