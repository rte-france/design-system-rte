import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgOpenInFull = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M3.333 17.5a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593v-5q0-.354.24-.594t.593-.24c.353 0 .434.08.594.24q.24.24.24.594v3l10.5-10.5h-3a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594q0-.354.24-.593.24-.24.594-.24h5q.354 0 .593.24.24.24.24.593v5q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-3l-10.5 10.5h3q.354 0 .594.24t.24.594c0 .354-.08.434-.24.593a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgOpenInFull;
