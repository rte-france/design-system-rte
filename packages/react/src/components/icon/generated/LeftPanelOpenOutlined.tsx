import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLeftPanelOpenOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10.4167 7.66667V12.3333C10.4167 12.5278 10.5 12.6597 10.6667 12.7292C10.8333 12.7986 10.9861 12.7639 11.125 12.625L13.1667 10.5833C13.3333 10.4167 13.4167 10.2222 13.4167 10C13.4167 9.77778 13.3333 9.58333 13.1667 9.41667L11.125 7.375C10.9861 7.23611 10.8333 7.20139 10.6667 7.27083C10.5 7.34028 10.4167 7.47222 10.4167 7.66667ZM4.16667 17.5C3.70833 17.5 3.31597 17.3368 2.98958 17.0104C2.66319 16.684 2.5 16.2917 2.5 15.8333V4.16667C2.5 3.70833 2.66319 3.31597 2.98958 2.98958C3.31597 2.66319 3.70833 2.5 4.16667 2.5H15.8333C16.2917 2.5 16.684 2.66319 17.0104 2.98958C17.3368 3.31597 17.5 3.70833 17.5 4.16667V15.8333C17.5 16.2917 17.3368 16.684 17.0104 17.0104C16.684 17.3368 16.2917 17.5 15.8333 17.5H4.16667ZM6.66667 15.8333V4.16667H4.16667V15.8333H6.66667ZM8.33333 15.8333H15.8333V4.16667H8.33333V15.8333Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgLeftPanelOpenOutlined;
