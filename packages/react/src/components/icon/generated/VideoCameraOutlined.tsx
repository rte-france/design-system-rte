import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgVideoCameraOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M3.333 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 1.666 15V5q0-.687.49-1.177t1.177-.49h10q.688 0 1.177.49T15 5v3.75l2.625-2.625q.209-.209.458-.104.25.104.25.396v7.166q0 .292-.25.396t-.458-.104L15 11.25V15q0 .687-.49 1.177-.489.49-1.177.49zm0-1.667h10V5h-10z"
      />
    </svg>
  );
};
export default SvgVideoCameraOutlined;
