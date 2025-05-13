import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgArrowAngleUpRight = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M13.48 8.333H5.832v7.5q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-7.5q0-.687.49-1.177t1.177-.49h7.646l-2.396-2.395a.85.85 0 0 1-.26-.594.78.78 0 0 1 .24-.594.8.8 0 0 1 .593-.25q.344 0 .594.25l3.833 3.834a.7.7 0 0 1 .177.27.9.9 0 0 1 .052.313.9.9 0 0 1-.052.312.7.7 0 0 1-.177.271l-3.854 3.854a.76.76 0 0 1-.583.24.84.84 0 0 1-.584-.26.88.88 0 0 1-.24-.584.76.76 0 0 1 .24-.583l2.417-2.417Z"
      />
    </svg>
  );
};
export default SvgArrowAngleUpRight;
