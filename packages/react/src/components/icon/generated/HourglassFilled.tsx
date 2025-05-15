import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgHourglassFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 18.333a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24H5v-2.5q0-1.27.594-2.385A4.64 4.64 0 0 1 7.25 10a4.64 4.64 0 0 1-1.656-1.781A5 5 0 0 1 5 5.833v-2.5h-.833a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h11.666q.355 0 .594.24.24.24.24.594t-.24.594a.8.8 0 0 1-.594.24H15v2.5q0 1.27-.594 2.385A4.64 4.64 0 0 1 12.75 10a4.64 4.64 0 0 1 1.656 1.781Q15 12.895 15 14.167v2.5h.833q.355 0 .594.24.24.239.24.593t-.24.594a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgHourglassFilled;
