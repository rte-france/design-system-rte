import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgStopFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5 13.333V6.667q0-.688.49-1.177Q5.979 5 6.667 5h6.666q.688 0 1.177.49.49.489.49 1.177v6.666q0 .688-.49 1.177-.489.49-1.177.49H6.667q-.688 0-1.177-.49A1.6 1.6 0 0 1 5 13.333"
      />
    </svg>
  );
};
export default SvgStopFilled;
