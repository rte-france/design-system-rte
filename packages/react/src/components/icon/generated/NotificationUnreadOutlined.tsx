import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgNotificationUnreadOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 18.333q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176h3.334q0 .687-.49 1.177t-1.177.49m-5.833-2.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24H5V8.334A4.88 4.88 0 0 1 6.042 5.26 4.8 4.8 0 0 1 8.75 3.5v-.583q0-.522.365-.886.364-.364.885-.364.52 0 .885.364.366.364.365.886v.27a3.84 3.84 0 0 0-.417 1.917 10 10 0 0 0-.406-.073A3 3 0 0 0 10 5a3.2 3.2 0 0 0-2.354.98 3.2 3.2 0 0 0-.98 2.353v5.834h6.667V8.813A4.2 4.2 0 0 0 15 9.167v5h.833q.355 0 .594.24.24.239.24.593t-.24.594a.8.8 0 0 1-.594.24zM15 7.5a2.4 2.4 0 0 1-1.77-.73A2.4 2.4 0 0 1 12.5 5q0-1.042.73-1.77A2.4 2.4 0 0 1 15 2.5a2.4 2.4 0 0 1 1.77.73A2.4 2.4 0 0 1 17.5 5a2.4 2.4 0 0 1-.73 1.77A2.4 2.4 0 0 1 15 7.5"
      />
    </svg>
  );
};
export default SvgNotificationUnreadOutlined;
