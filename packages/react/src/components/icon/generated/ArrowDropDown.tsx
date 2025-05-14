import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowDropDown = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m9.562 12.063-3.02-3.021a.4.4 0 0 1-.125-.292q0-.166.114-.292a.4.4 0 0 1 .302-.125h6.334a.4.4 0 0 1 .302.125.42.42 0 0 1 .114.292q0 .042-.125.292l-3.02 3.02a.6.6 0 0 1-.209.146.6.6 0 0 1-.229.042.6.6 0 0 1-.23-.042.6.6 0 0 1-.208-.146Z"
      />
    </svg>
  );
};
export default SvgArrowDropDown;
