import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgArrowDoubleUp = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m10 11.52-3.25 3.23a.81.81 0 0 1-.573.24.78.78 0 0 1-.594-.24.8.8 0 0 1-.229-.583.8.8 0 0 1 .23-.584L9.416 9.75a.7.7 0 0 1 .27-.177.9.9 0 0 1 .313-.052q.166 0 .313.052a.7.7 0 0 1 .27.177l3.834 3.833a.81.81 0 0 1 .24.573.78.78 0 0 1-.24.594.8.8 0 0 1-.584.23.8.8 0 0 1-.583-.23zm0-5L6.75 9.75a.81.81 0 0 1-.573.24.78.78 0 0 1-.594-.24.8.8 0 0 1-.229-.583.8.8 0 0 1 .23-.584L9.416 4.75a.7.7 0 0 1 .27-.177.9.9 0 0 1 .313-.052q.166 0 .313.052a.7.7 0 0 1 .27.177l3.834 3.833a.81.81 0 0 1 .24.573.78.78 0 0 1-.24.594.8.8 0 0 1-.584.23.8.8 0 0 1-.583-.23z"
      />
    </svg>
  );
};
export default SvgArrowDoubleUp;
