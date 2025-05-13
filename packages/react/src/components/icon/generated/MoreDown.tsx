import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgMoreDown = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.833 14.167H12.5q.354 0 .594.24.24.239.24.593c0 .354-.08.434-.24.594a.8.8 0 0 1-.594.24H5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594V7.5q0-.354.24-.594T5 6.666c.354 0 .434.08.594.24q.24.24.24.594v6.667ZM10 10h6.667q.354 0 .593.24.24.24.24.593c0 .353-.08.434-.24.594a.8.8 0 0 1-.593.24h-7.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-7.5q0-.354.24-.593.24-.24.594-.24c.354 0 .434.08.593.24q.24.24.24.593z"
      />
    </svg>
  );
};
export default SvgMoreDown;
