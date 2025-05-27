import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowAltUpRight = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M14.1667 7.00002L5.08333 16.0834C4.93056 16.2361 4.73611 16.3125 4.5 16.3125C4.26389 16.3125 4.06944 16.2361 3.91667 16.0834C3.76389 15.9306 3.6875 15.7361 3.6875 15.5C3.6875 15.2639 3.76389 15.0695 3.91667 14.9167L13 5.83335H8.33333C8.09722 5.83335 7.89931 5.75349 7.73958 5.59377C7.57986 5.43405 7.5 5.23613 7.5 5.00002C7.5 4.76391 7.57986 4.56599 7.73958 4.40627C7.89931 4.24655 8.09722 4.16669 8.33333 4.16669H15C15.2361 4.16669 15.434 4.24655 15.5937 4.40627C15.7535 4.56599 15.8333 4.76391 15.8333 5.00002V11.6667C15.8333 11.9028 15.7535 12.1007 15.5937 12.2604C15.434 12.4202 15.2361 12.5 15 12.5C14.7639 12.5 14.566 12.4202 14.4062 12.2604C14.2465 12.1007 14.1667 11.9028 14.1667 11.6667V7.00002Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgArrowAltUpRight;
