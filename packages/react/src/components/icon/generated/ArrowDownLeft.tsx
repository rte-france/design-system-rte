import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowDownLeft = ({ width = 20, height = 20, ...props }: IconProps) => {
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
        d="M6.66669 13L14.0834 5.58331C14.2361 5.43054 14.4306 5.35415 14.6667 5.35415C14.9028 5.35415 15.0972 5.43054 15.25 5.58331C15.4028 5.73609 15.4792 5.93054 15.4792 6.16665C15.4792 6.40276 15.4028 6.5972 15.25 6.74998L7.83335 14.1666L14.1667 14.1666C14.4028 14.1666 14.6007 14.2465 14.7604 14.4062C14.9202 14.566 15 14.7639 15 15C15 15.2361 14.9202 15.434 14.7604 15.5937C14.6007 15.7535 14.4028 15.8333 14.1667 15.8333L5.83335 15.8333C5.59724 15.8333 5.39933 15.7535 5.2396 15.5937C5.07988 15.434 5.00002 15.2361 5.00002 15L5.00002 6.66665C5.00002 6.43053 5.07988 6.23262 5.2396 6.0729C5.39933 5.91317 5.59724 5.83331 5.83335 5.83331C6.06947 5.83331 6.26738 5.91317 6.4271 6.0729C6.58683 6.23262 6.66669 6.43053 6.66669 6.66665L6.66669 13Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgArrowDownLeft;
