import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgBookmarkOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      width={width}
      height={height}
      role="img"
      {...props}
    >
      <path
        fill={fill}
        d="m10 15-3.5 1.5q-.833.354-1.583-.135-.75-.49-.75-1.386V4.167q0-.688.49-1.177.489-.49 1.176-.49h8.334q.687 0 1.177.49.49.489.49 1.177v10.812q0 .896-.75 1.386T13.5 16.5zm0-1.833 4.167 1.791V4.167H5.833v10.791zm0-9H5.833h8.334z"
      />
    </svg>
  );
};
export default SvgBookmarkOutlined;
