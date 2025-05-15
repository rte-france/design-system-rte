import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgChartPieOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10.833 9.167h5.792q-.312-2.292-1.906-3.886t-3.886-1.906zm-1.666 7.458V3.375q-2.52.312-4.177 2.198T3.333 10t1.657 4.427 4.177 2.198m1.666 0q2.292-.291 3.896-1.896t1.896-3.896h-5.792zM10 18.333a8.1 8.1 0 0 1-3.25-.656 8.4 8.4 0 0 1-2.646-1.781 8.4 8.4 0 0 1-1.781-2.646A8.1 8.1 0 0 1 1.667 10q0-1.73.656-3.25a8.4 8.4 0 0 1 1.781-2.646A8.4 8.4 0 0 1 6.75 2.323 8.1 8.1 0 0 1 10 1.667a8 8 0 0 1 3.24.656 8.5 8.5 0 0 1 2.646 1.792 8.5 8.5 0 0 1 1.791 2.645 8 8 0 0 1 .656 3.24 8.1 8.1 0 0 1-.656 3.23 8.5 8.5 0 0 1-1.781 2.655 8.3 8.3 0 0 1-2.646 1.792 8.1 8.1 0 0 1-3.25.656"
      />
    </svg>
  );
};
export default SvgChartPieOutlined;
