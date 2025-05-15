import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFlashFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M8.771 16.938a.66.66 0 0 1-.312-.22.6.6 0 0 1-.125-.385v-4.666H7.5q-.687 0-1.177-.49A1.6 1.6 0 0 1 5.833 10V3.333q0-.687.49-1.177t1.177-.49h4.875q.667 0 1.073.522.405.52.24 1.145L12.5 7.5h.938q.75 0 1.114.667t-.073 1.291l-5 7.23a.61.61 0 0 1-.708.25"
      />
    </svg>
  );
};
export default SvgFlashFilled;
