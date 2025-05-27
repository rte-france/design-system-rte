import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowChevronDown = ({ width = 20, height = 20, ...props }: IconProps) => {
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
        d="M9.99996 12.4792C9.88885 12.4792 9.78468 12.4618 9.68746 12.4271C9.59024 12.3924 9.49996 12.3334 9.41663 12.25L5.58329 8.41671C5.43051 8.26393 5.35413 8.06949 5.35413 7.83337C5.35413 7.59726 5.43051 7.40282 5.58329 7.25004C5.73607 7.09726 5.93051 7.02087 6.16663 7.02087C6.40274 7.02087 6.59718 7.09726 6.74996 7.25004L9.99996 10.5L13.25 7.25004C13.4027 7.09726 13.5972 7.02087 13.8333 7.02087C14.0694 7.02087 14.2638 7.09726 14.4166 7.25004C14.5694 7.40282 14.6458 7.59726 14.6458 7.83337C14.6458 8.06949 14.5694 8.26393 14.4166 8.41671L10.5833 12.25C10.5 12.3334 10.4097 12.3924 10.3125 12.4271C10.2152 12.4618 10.1111 12.4792 9.99996 12.4792Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgArrowChevronDown;
