import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgExternalLink = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h5q.354 0 .593.24.24.24.24.593c0 .353-.08.434-.24.594a.8.8 0 0 1-.593.24h-5v11.666h11.666v-5q0-.354.24-.593.24-.24.594-.24c.354 0 .434.08.593.24q.24.24.24.593v5q0 .688-.49 1.177-.489.49-1.177.49zM15.833 5.333 8.667 12.5a.8.8 0 0 1-.584.23.8.8 0 0 1-.583-.23.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.584l7.167-7.166H12.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594q0-.354.24-.593.24-.24.594-.24h4.167q.354 0 .593.24.24.24.24.593V7.5q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594z"
      />
    </svg>
  );
};
export default SvgExternalLink;
