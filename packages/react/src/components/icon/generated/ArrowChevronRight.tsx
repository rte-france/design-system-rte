import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowChevronRight = ({ width = 20, height = 20, ...props }: IconProps) => {
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
        d="M10.5 9.99996L7.25004 6.74996C7.09726 6.59718 7.02087 6.40274 7.02087 6.16663C7.02087 5.93051 7.09726 5.73607 7.25004 5.58329C7.40282 5.43051 7.59726 5.35413 7.83337 5.35413C8.06949 5.35413 8.26393 5.43051 8.41671 5.58329L12.25 9.41663C12.3334 9.49996 12.3924 9.59024 12.4271 9.68746C12.4618 9.78468 12.4792 9.88885 12.4792 9.99996C12.4792 10.1111 12.4618 10.2152 12.4271 10.3125C12.3924 10.4097 12.3334 10.5 12.25 10.5833L8.41671 14.4166C8.26393 14.5694 8.06949 14.6458 7.83337 14.6458C7.59726 14.6458 7.40282 14.5694 7.25004 14.4166C7.09726 14.2638 7.02087 14.0694 7.02087 13.8333C7.02087 13.5972 7.09726 13.4027 7.25004 13.25L10.5 9.99996Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgArrowChevronRight;
