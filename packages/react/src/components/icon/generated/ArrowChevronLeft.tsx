import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowChevronLeft = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m9 10 3.25 3.25a.8.8 0 0 1 .23.583.8.8 0 0 1-.23.584.8.8 0 0 1-.583.229.8.8 0 0 1-.584-.23L7.25 10.584a.7.7 0 0 1-.177-.27.9.9 0 0 1-.052-.313q0-.166.052-.313a.7.7 0 0 1 .177-.27l3.833-3.834a.8.8 0 0 1 .584-.229.8.8 0 0 1 .583.23.8.8 0 0 1 .23.583.8.8 0 0 1-.23.583z"
      />
    </svg>
  );
};
export default SvgArrowChevronLeft;
