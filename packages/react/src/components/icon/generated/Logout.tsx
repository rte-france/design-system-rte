import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgLogout = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h5q.354 0 .593.24.24.24.24.593c0 .353-.08.434-.24.594a.8.8 0 0 1-.593.24h-5v11.666h5q.354 0 .593.24.24.24.24.594c0 .354-.08.434-.24.593a.8.8 0 0 1-.593.24zm10.146-6.667h-5.98a.8.8 0 0 1-.593-.24A.8.8 0 0 1 7.5 10q0-.354.24-.594t.593-.24h5.98L12.75 7.605a.77.77 0 0 1-.23-.562q0-.334.23-.584a.8.8 0 0 1 .583-.26.79.79 0 0 1 .604.24l2.98 2.979a.8.8 0 0 1 .25.583.8.8 0 0 1-.25.583l-2.98 2.98a.78.78 0 0 1-.593.24.85.85 0 0 1-.594-.261.8.8 0 0 1-.219-.594.82.82 0 0 1 .24-.573l1.541-1.542Z"
      />
    </svg>
  );
};
export default SvgLogout;
