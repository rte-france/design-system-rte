import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgBatteryFull = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M6.667 18.333a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V4.167q0-.354.24-.594t.594-.24h1.667V2.5q0-.354.24-.594a.8.8 0 0 1 .593-.24h1.667q.354 0 .593.24.24.24.24.594v.833h1.667q.354 0 .593.24.24.24.24.594V17.5q0 .354-.24.594a.8.8 0 0 1-.593.24H6.667Z"
      />
    </svg>
  );
};
export default SvgBatteryFull;
