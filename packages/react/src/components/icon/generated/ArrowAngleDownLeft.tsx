import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowAngleDownLeft = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M6.52 11.667h7.647v-7.5q0-.354.24-.594.239-.24.593-.24c.354 0 .434.08.594.24q.24.24.24.594v7.5q0 .687-.49 1.177t-1.177.49H6.52l2.396 2.395a.85.85 0 0 1 .26.594.78.78 0 0 1-.24.594.8.8 0 0 1-.593.25.81.81 0 0 1-.594-.25l-3.833-3.834a.7.7 0 0 1-.177-.27.9.9 0 0 1-.052-.313q0-.166.052-.313a.7.7 0 0 1 .177-.27L7.77 8.063a.76.76 0 0 1 .583-.24.84.84 0 0 1 .584.26.88.88 0 0 1 .24.584.76.76 0 0 1-.24.583z"
      />
    </svg>
  );
};
export default SvgArrowAngleDownLeft;
