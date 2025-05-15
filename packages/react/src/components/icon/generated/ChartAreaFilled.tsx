import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgChartAreaFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m17.5 13.333-6.48-5.062a1.63 1.63 0 0 0-1.26-.344 1.58 1.58 0 0 0-1.114.677l-1.792 2.459a.8.8 0 0 1-.552.343.8.8 0 0 1-.635-.177L2.5 8.75V7.5q0-.52.458-.75.46-.23.875.083l2 1.5L8.98 3.938a1.62 1.62 0 0 1 1.125-.688 1.57 1.57 0 0 1 1.271.354l2.792 2.23h1.666q.688 0 1.177.489.49.49.49 1.177zm-15 3.334v-5.834l2.813 2.25q.563.459 1.26.354.698-.104 1.114-.687L9.5 10.27a.8.8 0 0 1 .552-.343.8.8 0 0 1 .636.177l6.812 5.334v1.229z"
      />
    </svg>
  );
};
export default SvgChartAreaFilled;
