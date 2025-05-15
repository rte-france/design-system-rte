import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgMailUnreadOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M3.333 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 1.666 15V5q0-.687.49-1.177.491-.49 1.177-.49h7.5q.354 0 .594.24t.24.594-.24.593a.8.8 0 0 1-.594.24h-7.5v10h13.334V9.167q0-.354.24-.594t.593-.24.594.24.24.594V15q0 .687-.49 1.177t-1.177.49zM10 9.167 12.688 7.5q.291-.187.552-.094.26.094.406.323.146.23.104.5t-.333.459l-2.98 1.874a.84.84 0 0 1-.437.126.84.84 0 0 1-.437-.126l-6.23-3.895V5zm5.833-2.5a2.4 2.4 0 0 1-1.77-.73 2.4 2.4 0 0 1-.73-1.77q0-1.042.73-1.771a2.4 2.4 0 0 1 1.77-.73 2.4 2.4 0 0 1 1.771.73 2.4 2.4 0 0 1 .73 1.77 2.4 2.4 0 0 1-.73 1.772 2.4 2.4 0 0 1-1.77.729"
      />
    </svg>
  );
};
export default SvgMailUnreadOutlined;
