import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowChevronDown = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 12.48a.9.9 0 0 1-.313-.053.7.7 0 0 1-.27-.177L5.583 8.417a.8.8 0 0 1-.229-.584.8.8 0 0 1 .23-.583.8.8 0 0 1 .583-.23.8.8 0 0 1 .583.23L10 10.5l3.25-3.25a.8.8 0 0 1 .583-.23.8.8 0 0 1 .584.23.8.8 0 0 1 .229.583.8.8 0 0 1-.23.584l-3.833 3.833a.7.7 0 0 1-.27.177.9.9 0 0 1-.313.052Z"
      />
    </svg>
  );
};
export default SvgArrowChevronDown;
