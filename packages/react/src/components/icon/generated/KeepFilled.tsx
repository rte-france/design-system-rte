import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgKeepFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M13.333 4.167V10l1.417 1.417a.83.83 0 0 1 .25.604v.479q0 .354-.24.594a.8.8 0 0 1-.593.24h-3.334v4.874q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-4.875H5.834a.8.8 0 0 1-.593-.24A.8.8 0 0 1 5 12.5v-.48q0-.165.063-.322a.8.8 0 0 1 .187-.281L6.667 10V4.167a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594q0-.354.24-.593.24-.24.594-.24h6.666q.354 0 .594.24t.24.593-.24.594a.8.8 0 0 1-.594.24"
      />
    </svg>
  );
};
export default SvgKeepFilled;
