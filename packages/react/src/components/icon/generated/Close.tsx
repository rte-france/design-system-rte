import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgClose = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 11.167 5.917 15.25a.8.8 0 0 1-.584.23.8.8 0 0 1-.583-.23.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.584L8.833 10 4.75 5.917a.8.8 0 0 1-.23-.584.8.8 0 0 1 .23-.583.8.8 0 0 1 .583-.23.8.8 0 0 1 .584.23L10 8.833l4.083-4.083a.8.8 0 0 1 .584-.23.8.8 0 0 1 .583.23.8.8 0 0 1 .23.583.8.8 0 0 1-.23.584L11.167 10l4.083 4.083a.8.8 0 0 1 .23.584.8.8 0 0 1-.23.583.8.8 0 0 1-.583.23.8.8 0 0 1-.584-.23z"
      />
    </svg>
  );
};
export default SvgClose;
