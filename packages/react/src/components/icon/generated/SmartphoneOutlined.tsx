import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgSmartphoneOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.83317 19.1666C5.37484 19.1666 4.98248 19.0035 4.65609 18.6771C4.3297 18.3507 4.1665 17.9583 4.1665 17.5V2.49998C4.1665 2.04165 4.3297 1.64929 4.65609 1.3229C4.98248 0.996507 5.37484 0.833313 5.83317 0.833313H14.1665C14.6248 0.833313 15.0172 0.996507 15.3436 1.3229C15.67 1.64929 15.8332 2.04165 15.8332 2.49998V17.5C15.8332 17.9583 15.67 18.3507 15.3436 18.6771C15.0172 19.0035 14.6248 19.1666 14.1665 19.1666H5.83317ZM5.83317 16.6666V17.5H14.1665V16.6666H5.83317ZM5.83317 15H14.1665V4.99998H5.83317V15ZM5.83317 3.33331H14.1665V2.49998H5.83317V3.33331Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgSmartphoneOutlined;
