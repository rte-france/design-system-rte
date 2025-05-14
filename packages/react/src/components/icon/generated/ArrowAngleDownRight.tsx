import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowAngleDownRight = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M13.48 11.667H5.832v-7.5a.8.8 0 0 0-.24-.594.8.8 0 0 0-.593-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594v7.5q0 .687.49 1.177t1.177.49h7.646l-2.396 2.395a.85.85 0 0 0-.26.594.78.78 0 0 0 .24.594.8.8 0 0 0 .593.25q.344 0 .594-.25l3.833-3.834a.7.7 0 0 0 .177-.27.9.9 0 0 0 .052-.313.9.9 0 0 0-.052-.313.7.7 0 0 0-.177-.27L12.23 8.063a.76.76 0 0 0-.583-.24.84.84 0 0 0-.584.26.88.88 0 0 0-.24.584.76.76 0 0 0 .24.583z"
      />
    </svg>
  );
};
export default SvgArrowAngleDownRight;
