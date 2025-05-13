import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgBatteryCharging = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M6.667 18.333a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V4.167q0-.354.24-.594t.594-.24h1.667V2.5q0-.354.24-.594a.8.8 0 0 1 .593-.24h1.667q.354 0 .593.24.24.24.24.594v.833h1.667q.354 0 .593.24.24.24.24.594v5q0 .354-.24.593a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V5h-5v6.667h1.75q.374 0 .542.333a.64.64 0 0 1-.042.667q-.291.52-.437 1.104A5 5 0 0 0 9.167 15a4.85 4.85 0 0 0 .583 2.333.73.73 0 0 1 0 .677.55.55 0 0 1-.52.323zm7.083-2.5h-1.29a.38.38 0 0 1-.365-.218.38.38 0 0 1 .031-.428l2.084-2.979q.103-.124.24-.083.135.042.135.208v1.834h1.291q.25 0 .365.218a.385.385 0 0 1-.031.428l-2.084 2.979q-.105.124-.24.083-.135-.042-.135-.208v-1.834Z"
      />
    </svg>
  );
};
export default SvgBatteryCharging;
