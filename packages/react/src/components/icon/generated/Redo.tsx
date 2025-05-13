import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgRedo = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M13.5 8.333H8.25q-1.312 0-2.281.834Q5 10 5 11.25t.969 2.083 2.281.834h5.083q.354 0 .594.24.24.239.24.593c0 .354-.08.434-.24.594a.8.8 0 0 1-.594.24H8.25q-2.02 0-3.469-1.313T3.333 11.25q0-1.959 1.448-3.27Q6.23 6.666 8.25 6.667h5.25l-1.583-1.584a.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.583.8.8 0 0 1 .583-.23.8.8 0 0 1 .583.23l3 3a.7.7 0 0 1 .177.27.9.9 0 0 1 .052.313.9.9 0 0 1-.052.313.7.7 0 0 1-.177.27l-3 3a.8.8 0 0 1-.583.23.8.8 0 0 1-.583-.23.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.583z"
      />
    </svg>
  );
};
export default SvgRedo;
