import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBookmarkOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
      <path
        d="M9.99999 15L6.49999 16.5C5.94443 16.7361 5.41666 16.691 4.91666 16.3646C4.41666 16.0382 4.16666 15.5764 4.16666 14.9792V4.16667C4.16666 3.70833 4.32985 3.31597 4.65624 2.98958C4.98263 2.66319 5.37499 2.5 5.83332 2.5H14.1667C14.625 2.5 15.0174 2.66319 15.3437 2.98958C15.6701 3.31597 15.8333 3.70833 15.8333 4.16667V14.9792C15.8333 15.5764 15.5833 16.0382 15.0833 16.3646C14.5833 16.691 14.0555 16.7361 13.5 16.5L9.99999 15ZM9.99999 13.1667L14.1667 14.9583V4.16667H5.83332V14.9583L9.99999 13.1667ZM9.99999 4.16667H5.83332H14.1667H9.99999Z"
        fill={fill}
      />
    </svg>
  );
};
export default SvgBookmarkOutlined;
