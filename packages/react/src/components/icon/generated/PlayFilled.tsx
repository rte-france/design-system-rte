import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPlayFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      role="img"
      {...props}
    >
      <path
        d="M6.66663 14.3125V5.68752C6.66663 5.45141 6.74996 5.25349 6.91663 5.09377C7.08329 4.93405 7.27774 4.85419 7.49996 4.85419C7.5694 4.85419 7.64232 4.8646 7.71871 4.88544C7.7951 4.90627 7.86801 4.93752 7.93746 4.97919L14.7291 9.29169C14.8541 9.37502 14.9479 9.47919 15.0104 9.60419C15.0729 9.72919 15.1041 9.86113 15.1041 10C15.1041 10.1389 15.0729 10.2709 15.0104 10.3959C14.9479 10.5209 14.8541 10.625 14.7291 10.7084L7.93746 15.0209C7.86801 15.0625 7.7951 15.0938 7.71871 15.1146C7.64232 15.1354 7.5694 15.1459 7.49996 15.1459C7.27774 15.1459 7.08329 15.066 6.91663 14.9063C6.74996 14.7465 6.66663 14.5486 6.66663 14.3125Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgPlayFilled;
