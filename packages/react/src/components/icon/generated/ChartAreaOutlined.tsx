import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgChartAreaOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m11.375 3.604 2.792 2.23h1.666q.688 0 1.177.489.49.49.49 1.177v9.167h-15V7.5q0-.52.458-.75.46-.23.875.083l2 1.5L8.98 3.938a1.62 1.62 0 0 1 1.125-.688 1.57 1.57 0 0 1 1.271.354M4.167 9.167v3l2.5 2L10 9.583l5.833 4.542V7.5h-2.25l-3.25-2.604-4.125 5.792z"
      />
    </svg>
  );
};
export default SvgChartAreaOutlined;
