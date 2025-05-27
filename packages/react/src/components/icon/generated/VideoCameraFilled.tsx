import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgVideoCameraFilled = ({ width = 20, height = 20, ...props }: IconProps) => {
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
        d="M3.33329 16.6666C2.87496 16.6666 2.4826 16.5035 2.15621 16.1771C1.82982 15.8507 1.66663 15.4583 1.66663 15V4.99998C1.66663 4.54165 1.82982 4.14929 2.15621 3.8229C2.4826 3.49651 2.87496 3.33331 3.33329 3.33331H13.3333C13.7916 3.33331 14.184 3.49651 14.5104 3.8229C14.8368 4.14929 15 4.54165 15 4.99998V8.74998L17.625 6.12498C17.7638 5.98609 17.9166 5.95137 18.0833 6.02081C18.25 6.09026 18.3333 6.2222 18.3333 6.41665V13.5833C18.3333 13.7778 18.25 13.9097 18.0833 13.9791C17.9166 14.0486 17.7638 14.0139 17.625 13.875L15 11.25V15C15 15.4583 14.8368 15.8507 14.5104 16.1771C14.184 16.5035 13.7916 16.6666 13.3333 16.6666H3.33329Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default SvgVideoCameraFilled;
