import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgNotificationOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 15.833a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24H5V8.334A4.88 4.88 0 0 1 6.042 5.26 4.8 4.8 0 0 1 8.75 3.5v-.583q0-.522.365-.886.364-.364.885-.364.52 0 .885.364.366.364.365.886V3.5a4.8 4.8 0 0 1 2.708 1.76A4.88 4.88 0 0 1 15 8.333v5.834h.833q.354 0 .594.24.24.239.24.593t-.24.594a.8.8 0 0 1-.594.24zm5.833 2.5q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176h3.334q0 .687-.49 1.177t-1.177.49m-3.333-4.166h6.666V8.333a3.2 3.2 0 0 0-.979-2.354A3.2 3.2 0 0 0 10 5a3.2 3.2 0 0 0-2.354.98 3.2 3.2 0 0 0-.98 2.353z"
      />
    </svg>
  );
};
export default SvgNotificationOutlined;
