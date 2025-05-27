import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowChevronUp = ({ width = 20, height = 20, ...props }: IconProps) => {
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
        d="M9.99996 9L6.74996 12.25C6.59718 12.4028 6.40274 12.4792 6.16663 12.4792C5.93051 12.4792 5.73607 12.4028 5.58329 12.25C5.43051 12.0972 5.35413 11.9028 5.35413 11.6667C5.35413 11.4306 5.43051 11.2361 5.58329 11.0833L9.41663 7.25C9.58329 7.08333 9.77774 7 9.99996 7C10.2222 7 10.4166 7.08333 10.5833 7.25L14.4166 11.0833C14.5694 11.2361 14.6458 11.4306 14.6458 11.6667C14.6458 11.9028 14.5694 12.0972 14.4166 12.25C14.2638 12.4028 14.0694 12.4792 13.8333 12.4792C13.5972 12.4792 13.4027 12.4028 13.25 12.25L9.99996 9Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgArrowChevronUp;
