import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgUpload = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 3.333 15v-1.667q0-.354.24-.593.24-.24.594-.24t.593.24.24.593V15h10v-1.667q0-.354.24-.593.24-.24.593-.24.355 0 .594.24.24.24.24.593V15q0 .687-.49 1.177t-1.177.49zM9.167 6.542 7.604 8.104a.78.78 0 0 1-.594.24.85.85 0 0 1-.833-.844.76.76 0 0 1 .24-.583l3-3a.7.7 0 0 1 .27-.177.9.9 0 0 1 .313-.053q.166 0 .313.053a.7.7 0 0 1 .27.177l3 3a.76.76 0 0 1 .24.583.85.85 0 0 1-.833.844.78.78 0 0 1-.594-.24l-1.563-1.562V12.5q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594z"
      />
    </svg>
  );
};
export default SvgUpload;
