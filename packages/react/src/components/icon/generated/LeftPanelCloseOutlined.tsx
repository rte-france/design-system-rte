import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLeftPanelCloseOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
      <path
        d="M13.75 12.3333V7.66667C13.75 7.47222 13.6667 7.34028 13.5 7.27083C13.3333 7.20139 13.1806 7.23611 13.0417 7.375L11 9.41667C10.8333 9.58333 10.75 9.77778 10.75 10C10.75 10.2222 10.8333 10.4167 11 10.5833L13.0417 12.625C13.1806 12.7639 13.3333 12.7986 13.5 12.7292C13.6667 12.6597 13.75 12.5278 13.75 12.3333ZM4.16667 17.5C3.70833 17.5 3.31597 17.3368 2.98958 17.0104C2.66319 16.684 2.5 16.2917 2.5 15.8333V4.16667C2.5 3.70833 2.66319 3.31597 2.98958 2.98958C3.31597 2.66319 3.70833 2.5 4.16667 2.5H15.8333C16.2917 2.5 16.684 2.66319 17.0104 2.98958C17.3368 3.31597 17.5 3.70833 17.5 4.16667V15.8333C17.5 16.2917 17.3368 16.684 17.0104 17.0104C16.684 17.3368 16.2917 17.5 15.8333 17.5H4.16667ZM6.66667 15.8333V4.16667H4.16667V15.8333H6.66667ZM8.33333 15.8333H15.8333V4.16667H8.33333V15.8333Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgLeftPanelCloseOutlined;
