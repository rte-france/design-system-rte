import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCheckSmall = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m8.333 11.333 4.917-4.916a.8.8 0 0 1 .583-.23.8.8 0 0 1 .584.23.8.8 0 0 1 .229.583.8.8 0 0 1-.23.583l-5.5 5.5a.8.8 0 0 1-.583.25.8.8 0 0 1-.583-.25l-2.167-2.166a.8.8 0 0 1-.229-.584.8.8 0 0 1 .23-.583.8.8 0 0 1 .583-.23.8.8 0 0 1 .583.23z"
      />
    </svg>
  );
};
export default SvgCheckSmall;
