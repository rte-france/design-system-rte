import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowChevronLeft = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.00004 9.99996L12.25 13.25C12.4028 13.4027 12.4792 13.5972 12.4792 13.8333C12.4792 14.0694 12.4028 14.2638 12.25 14.4166C12.0973 14.5694 11.9028 14.6458 11.6667 14.6458C11.4306 14.6458 11.2362 14.5694 11.0834 14.4166L7.25004 10.5833C7.16671 10.5 7.10768 10.4097 7.07296 10.3125C7.03824 10.2152 7.02087 10.1111 7.02087 9.99996C7.02087 9.88885 7.03824 9.78468 7.07296 9.68746C7.10768 9.59024 7.16671 9.49996 7.25004 9.41663L11.0834 5.58329C11.2362 5.43051 11.4306 5.35413 11.6667 5.35413C11.9028 5.35413 12.0973 5.43051 12.25 5.58329C12.4028 5.73607 12.4792 5.93051 12.4792 6.16663C12.4792 6.40274 12.4028 6.59718 12.25 6.74996L9.00004 9.99996Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgArrowChevronLeft;
