import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgRightPanelOpenFilled = ({ width = 20, height = 20, ...props }: IconProps) => {
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
        d="M9.58333 12.3333V7.66667C9.58333 7.47222 9.5 7.34028 9.33333 7.27083C9.16667 7.20139 9.01389 7.23611 8.875 7.375L6.83333 9.41667C6.66667 9.58333 6.58333 9.77778 6.58333 10C6.58333 10.2222 6.66667 10.4167 6.83333 10.5833L8.875 12.625C9.01389 12.7639 9.16667 12.7986 9.33333 12.7292C9.5 12.6597 9.58333 12.5278 9.58333 12.3333ZM4.16667 17.5C3.70833 17.5 3.31597 17.3368 2.98958 17.0104C2.66319 16.684 2.5 16.2917 2.5 15.8333V4.16667C2.5 3.70833 2.66319 3.31597 2.98958 2.98958C3.31597 2.66319 3.70833 2.5 4.16667 2.5H15.8333C16.2917 2.5 16.684 2.66319 17.0104 2.98958C17.3368 3.31597 17.5 3.70833 17.5 4.16667V15.8333C17.5 16.2917 17.3368 16.684 17.0104 17.0104C16.684 17.3368 16.2917 17.5 15.8333 17.5H4.16667ZM11.6667 15.8333V4.16667H4.16667V15.8333H11.6667Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgRightPanelOpenFilled;
