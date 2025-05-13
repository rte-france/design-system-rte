import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgArrowDoubleDown = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m10 13.48 3.25-3.23a.81.81 0 0 1 .573-.24.78.78 0 0 1 .594.24.8.8 0 0 1 .229.583.8.8 0 0 1-.23.584l-3.833 3.833a.7.7 0 0 1-.27.177.9.9 0 0 1-.313.052.9.9 0 0 1-.312-.052.7.7 0 0 1-.271-.177l-3.834-3.833a.81.81 0 0 1-.24-.573.78.78 0 0 1 .24-.594.8.8 0 0 1 .584-.23.8.8 0 0 1 .583.23zm0-5 3.25-3.23a.81.81 0 0 1 .573-.24.78.78 0 0 1 .594.24.8.8 0 0 1 .229.583.8.8 0 0 1-.23.584l-3.833 3.833a.7.7 0 0 1-.27.177.9.9 0 0 1-.313.052.9.9 0 0 1-.312-.052.7.7 0 0 1-.271-.177L5.583 6.417a.81.81 0 0 1-.24-.573.78.78 0 0 1 .24-.594.8.8 0 0 1 .584-.23.8.8 0 0 1 .583.23z"
      />
    </svg>
  );
};
export default SvgArrowDoubleDown;
