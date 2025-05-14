import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgHourglassEmpty = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M6.667 16.667h6.666v-2.5a3.2 3.2 0 0 0-.979-2.354 3.2 3.2 0 0 0-2.354-.98 3.2 3.2 0 0 0-2.354.98 3.2 3.2 0 0 0-.98 2.354zM10 9.167a3.2 3.2 0 0 0 2.354-.98 3.2 3.2 0 0 0 .98-2.354v-2.5H6.666v2.5q0 1.376.979 2.354a3.2 3.2 0 0 0 2.354.98Zm-5.833 9.166a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24H5v-2.5q0-1.27.594-2.385A4.64 4.64 0 0 1 7.25 10a4.64 4.64 0 0 1-1.656-1.781A5 5 0 0 1 5 5.833v-2.5h-.833a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h11.666q.354 0 .594.24t.24.594c0 .354-.08.434-.24.594a.8.8 0 0 1-.594.24H15v2.5q0 1.27-.594 2.385A4.64 4.64 0 0 1 12.75 10a4.64 4.64 0 0 1 1.656 1.781Q15 12.895 15 14.167v2.5h.833q.354 0 .594.24.24.239.24.593c0 .354-.08.434-.24.594a.8.8 0 0 1-.594.24H4.167Z"
      />
    </svg>
  );
};
export default SvgHourglassEmpty;
