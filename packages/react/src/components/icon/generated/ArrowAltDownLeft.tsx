import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowAltDownLeft = ({ width = 20, height = 20, ...props }: IconProps) => {
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
        d="M5.83333 13L14.9167 3.91665C15.0694 3.76387 15.2639 3.68748 15.5 3.68748C15.7361 3.68748 15.9306 3.76387 16.0833 3.91665C16.2361 4.06942 16.3125 4.26387 16.3125 4.49998C16.3125 4.73609 16.2361 4.93054 16.0833 5.08331L7 14.1666L11.6667 14.1666C11.9028 14.1666 12.1007 14.2465 12.2604 14.4062C12.4201 14.566 12.5 14.7639 12.5 15C12.5 15.2361 12.4201 15.434 12.2604 15.5937C12.1007 15.7535 11.9028 15.8333 11.6667 15.8333L5 15.8333C4.76389 15.8333 4.56597 15.7535 4.40625 15.5937C4.24653 15.434 4.16667 15.2361 4.16667 15L4.16667 8.33331C4.16667 8.0972 4.24653 7.89928 4.40625 7.73956C4.56597 7.57984 4.76389 7.49998 5 7.49998C5.23611 7.49998 5.43403 7.57984 5.59375 7.73956C5.75347 7.89928 5.83333 8.0972 5.83333 8.33331L5.83333 13Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgArrowAltDownLeft;
