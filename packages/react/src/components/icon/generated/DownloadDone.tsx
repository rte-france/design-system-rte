import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgDownloadDone = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M7.958 10.958 15 3.917a.81.81 0 0 1 .594-.25q.344 0 .594.25t.25.593q0 .344-.25.594L8.541 12.75a.8.8 0 0 1-.584.25.8.8 0 0 1-.583-.25L3.812 9.187a.78.78 0 0 1-.24-.593A.85.85 0 0 1 3.834 8a.81.81 0 0 1 .594-.25.8.8 0 0 1 .594.25zM5 16.667a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594q0-.354.24-.594A.8.8 0 0 1 5 15h10q.354 0 .594.24t.24.593c0 .353-.08.434-.24.594a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgDownloadDone;
