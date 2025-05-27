import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFilterAltOffOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M12.3333 9.97917L11.1458 8.79167L14.125 5H7.35415L5.68748 3.33333H15.8333C16.1805 3.33333 16.4305 3.48611 16.5833 3.79167C16.7361 4.09722 16.7083 4.38889 16.5 4.66667L12.3333 9.97917ZM11.6666 14.0208V15.8333C11.6666 16.0694 11.5868 16.2674 11.4271 16.4271C11.2673 16.5868 11.0694 16.6667 10.8333 16.6667H9.16665C8.93054 16.6667 8.73262 16.5868 8.5729 16.4271C8.41318 16.2674 8.33331 16.0694 8.33331 15.8333V10.6875L1.74998 4.10417C1.5972 3.95139 1.52081 3.76042 1.52081 3.53125C1.52081 3.30208 1.5972 3.10417 1.74998 2.9375C1.91665 2.77083 2.11456 2.6875 2.34373 2.6875C2.5729 2.6875 2.77081 2.77083 2.93748 2.9375L17.0833 17.0833C17.25 17.25 17.3298 17.4444 17.3229 17.6667C17.316 17.8889 17.2291 18.0833 17.0625 18.25C16.8958 18.4028 16.7014 18.4826 16.4791 18.4896C16.2569 18.4965 16.0625 18.4167 15.8958 18.25L11.6666 14.0208Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgFilterAltOffOutlined;
