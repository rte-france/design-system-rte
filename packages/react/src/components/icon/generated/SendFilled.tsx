import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgSendFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M3.667 16.188a.83.83 0 0 1-.792-.073.78.78 0 0 1-.375-.698v-3.75L9.167 10 2.5 8.333v-3.75q0-.458.375-.698a.83.83 0 0 1 .792-.072L16.5 9.229q.52.23.52.771 0 .542-.52.77z"
      />
    </svg>
  );
};
export default SvgSendFilled;
