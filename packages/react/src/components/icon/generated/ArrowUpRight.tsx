import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgArrowUpRight = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m13.333 7-7.416 7.417a.8.8 0 0 1-.584.229.8.8 0 0 1-.583-.23.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.583l7.417-7.417H5.833a.8.8 0 0 1-.593-.24A.8.8 0 0 1 5 5q0-.354.24-.594t.593-.24h8.334q.354 0 .594.24T15 5v8.333q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594z"
      />
    </svg>
  );
};
export default SvgArrowUpRight;
