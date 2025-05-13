import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgLogin = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10.833 17.5a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.593-.24h5V4.167h-5a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.594q0-.354.24-.593.24-.24.593-.24h5q.688 0 1.177.49.49.489.49 1.177v11.666q0 .688-.49 1.177-.489.49-1.177.49zm-1.52-6.667h-5.98a.8.8 0 0 1-.593-.24A.8.8 0 0 1 2.5 10q0-.354.24-.594t.593-.24h5.98L7.75 7.605a.77.77 0 0 1-.23-.562q0-.334.23-.584a.8.8 0 0 1 .583-.26.79.79 0 0 1 .604.24l2.98 2.979a.8.8 0 0 1 .25.583.8.8 0 0 1-.25.583l-2.98 2.98a.78.78 0 0 1-.593.24.85.85 0 0 1-.594-.261.8.8 0 0 1-.219-.594.81.81 0 0 1 .24-.573l1.542-1.542Z"
      />
    </svg>
  );
};
export default SvgLogin;
