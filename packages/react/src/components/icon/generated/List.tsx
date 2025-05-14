import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgList = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M8.333 15.833a.8.8 0 0 1-.593-.24A.8.8 0 0 1 7.5 15q0-.354.24-.594t.593-.24h8.334q.354 0 .593.24.24.24.24.594c0 .354-.08.434-.24.594a.8.8 0 0 1-.593.24zm0-5a.8.8 0 0 1-.593-.24A.8.8 0 0 1 7.5 10q0-.354.24-.594t.593-.24h8.334q.354 0 .593.24.24.24.24.594c0 .354-.08.434-.24.594a.8.8 0 0 1-.593.24zm0-5a.8.8 0 0 1-.593-.24A.8.8 0 0 1 7.5 5q0-.354.24-.594t.593-.24h8.334q.354 0 .593.24.24.24.24.594c0 .354-.08.434-.24.594a.8.8 0 0 1-.593.24H8.333ZM4.167 16.667q-.688 0-1.177-.49A1.6 1.6 0 0 1 2.5 15q0-.687.49-1.177.489-.49 1.177-.49.687 0 1.177.49T5.834 15t-.49 1.177-1.177.49m0-5q-.688 0-1.177-.49A1.6 1.6 0 0 1 2.5 10q0-.687.49-1.177.489-.49 1.177-.49.687 0 1.177.49T5.834 10t-.49 1.177-1.177.49m0-5q-.688 0-1.177-.49A1.6 1.6 0 0 1 2.5 5q0-.687.49-1.177.489-.49 1.177-.49.687 0 1.177.49T5.834 5t-.49 1.177-1.177.49"
      />
    </svg>
  );
};
export default SvgList;
