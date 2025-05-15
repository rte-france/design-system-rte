import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgStickyNoteOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 15.833h7.5V12.5q0-.354.24-.594.239-.24.593-.24h3.333v-7.5H4.167zm0 1.667q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h11.666q.688 0 1.177.49.49.489.49 1.177v7.646a1.65 1.65 0 0 1-.48 1.166l-4.04 4.042q-.23.229-.532.354a1.65 1.65 0 0 1-.636.125zm5-5.833h-2.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594q0-.354.24-.593.24-.24.594-.24h2.5q.354 0 .593.24.24.24.24.593 0 .354-.24.594a.8.8 0 0 1-.593.24m4.166-3.334H6.667a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h6.666q.354 0 .594.24t.24.594-.24.594a.8.8 0 0 1-.594.24"
      />
    </svg>
  );
};
export default SvgStickyNoteOutlined;
