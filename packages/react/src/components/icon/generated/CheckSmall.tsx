import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCheckSmall = ({ width = 20, height = 20, ...props }: IconProps) => {
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
        d="M8.33334 11.3333L13.25 6.41667C13.4028 6.26389 13.5972 6.1875 13.8333 6.1875C14.0694 6.1875 14.2639 6.26389 14.4167 6.41667C14.5694 6.56944 14.6458 6.76389 14.6458 7C14.6458 7.23611 14.5694 7.43056 14.4167 7.58333L8.91667 13.0833C8.75001 13.25 8.55556 13.3333 8.33334 13.3333C8.11112 13.3333 7.91667 13.25 7.75001 13.0833L5.58334 10.9167C5.43056 10.7639 5.35417 10.5694 5.35417 10.3333C5.35417 10.0972 5.43056 9.90278 5.58334 9.75C5.73612 9.59722 5.93056 9.52083 6.16667 9.52083C6.40278 9.52083 6.59723 9.59722 6.75001 9.75L8.33334 11.3333Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgCheckSmall;
