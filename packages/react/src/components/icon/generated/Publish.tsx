import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgPublish = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m9.167 9.875-1.563 1.563a.78.78 0 0 1-.594.24.85.85 0 0 1-.833-.845.76.76 0 0 1 .24-.583l3-3a.7.7 0 0 1 .27-.177.9.9 0 0 1 .313-.052q.166 0 .313.052a.7.7 0 0 1 .27.177l3 3a.76.76 0 0 1 .24.583.85.85 0 0 1-.833.844.78.78 0 0 1-.594-.24l-1.563-1.562v5.958q0 .355-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594zM3.333 6.667V5q0-.687.49-1.177T5 3.333h10q.687 0 1.177.49T16.667 5v1.667q0 .354-.24.593a.8.8 0 0 1-.594.24.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593V5H5v1.667q0 .354-.24.593a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593"
      />
    </svg>
  );
};
export default SvgPublish;
