import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFileCopyOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M15.833 15.833H6.667q-.688 0-1.178-.49A1.6 1.6 0 0 1 5 14.168V2.5q0-.687.49-1.177t1.178-.49h5.145a1.65 1.65 0 0 1 1.167.48l4.042 4.041q.228.23.354.531.125.303.125.636v7.646q0 .687-.49 1.177t-1.177.49m0-9.166h-2.917q-.52 0-.885-.365a1.2 1.2 0 0 1-.365-.885V2.5h-5v11.667h9.167zm-12.5 12.5q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V6.667q0-.354.24-.594t.594-.24.594.24.24.594V17.5h8.333q.354 0 .593.24.24.24.24.593 0 .355-.24.594a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgFileCopyOutlined;
