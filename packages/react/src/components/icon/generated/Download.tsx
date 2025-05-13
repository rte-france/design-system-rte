import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgDownload = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 12.98a.9.9 0 0 1-.312-.053.7.7 0 0 1-.271-.177l-3-3a.76.76 0 0 1-.24-.583.85.85 0 0 1 .833-.844.78.78 0 0 1 .594.24l1.563 1.562V4.167q0-.354.24-.594.239-.24.593-.24c.354 0 .434.08.594.24q.24.24.24.594v5.958l1.562-1.562a.78.78 0 0 1 .594-.24.85.85 0 0 1 .833.844.76.76 0 0 1-.24.583l-3 3a.7.7 0 0 1-.27.177.9.9 0 0 1-.313.052Zm-5 3.687q-.687 0-1.177-.49A1.6 1.6 0 0 1 3.333 15v-1.667q0-.354.24-.593.24-.24.594-.24c.354 0 .434.08.593.24q.24.24.24.593V15h10v-1.667q0-.354.24-.593.24-.24.593-.24.355 0 .594.24.24.24.24.593V15q0 .687-.49 1.177t-1.177.49z"
      />
    </svg>
  );
};
export default SvgDownload;
