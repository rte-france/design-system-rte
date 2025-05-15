import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCalendarBusyOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 13.667 8.667 15a.8.8 0 0 1-.584.23A.8.8 0 0 1 7.5 15a.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.584L8.833 12.5 7.5 11.167a.8.8 0 0 1-.23-.584A.8.8 0 0 1 7.5 10a.8.8 0 0 1 .583-.23.8.8 0 0 1 .584.23L10 11.333 11.333 10a.8.8 0 0 1 .584-.23.8.8 0 0 1 .583.23.8.8 0 0 1 .23.583.8.8 0 0 1-.23.584L11.167 12.5l1.333 1.333a.8.8 0 0 1 .23.584.8.8 0 0 1-.23.583.8.8 0 0 1-.583.23.8.8 0 0 1-.584-.23zm-5.833 4.666q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176V5q0-.687.49-1.177.489-.49 1.177-.49H5V2.5q0-.354.24-.594t.593-.24.594.24.24.594v.833h6.666V2.5q0-.354.24-.594t.594-.24.593.24.24.594v.833h.833q.688 0 1.177.49T17.5 5v11.667q0 .687-.49 1.177-.489.49-1.177.49zm0-1.666h11.666V8.333H4.167zm0-10h11.666V5H4.167z"
      />
    </svg>
  );
};
export default SvgCalendarBusyOutlined;
