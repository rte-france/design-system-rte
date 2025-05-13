import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgBatteryAltFull = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 14.167a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-1.666H2.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594V9.167q0-.354.24-.594t.594-.24h.833V6.667q0-.354.24-.594t.594-.24H17.5q.354 0 .594.24t.24.594v6.666q0 .354-.24.594a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgBatteryAltFull;
