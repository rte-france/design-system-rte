import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgStopOutlined = ({ width = 20, height = 20, ...props }: IconProps) => {
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
        d="M5 13.3333V6.66667C5 6.20833 5.16319 5.81597 5.48958 5.48958C5.81597 5.16319 6.20833 5 6.66667 5H13.3333C13.7917 5 14.184 5.16319 14.5104 5.48958C14.8368 5.81597 15 6.20833 15 6.66667V13.3333C15 13.7917 14.8368 14.184 14.5104 14.5104C14.184 14.8368 13.7917 15 13.3333 15H6.66667C6.20833 15 5.81597 14.8368 5.48958 14.5104C5.16319 14.184 5 13.7917 5 13.3333ZM6.66667 13.3333H13.3333V6.66667H6.66667V13.3333Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgStopOutlined;
