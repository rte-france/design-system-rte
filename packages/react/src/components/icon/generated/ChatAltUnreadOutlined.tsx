import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgChatAltUnreadOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.833 11.667h5q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24h-5a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24m0-2.5h8.334q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24H5.833a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24m0-2.5H12.5q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593A.8.8 0 0 0 12.5 5H5.833a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24M5 15l-1.917 1.917q-.395.396-.906.177-.51-.22-.51-.782V3.334q0-.687.49-1.177.489-.49 1.176-.49h7.5q.354 0 .594.24t.24.594-.24.594a.8.8 0 0 1-.594.24h-7.5V14.27l.959-.938h12.375V7.5q0-.354.24-.594t.593-.24.594.24.24.594v5.833q0 .688-.49 1.177t-1.177.49zM15.833 5a2.4 2.4 0 0 1-1.77-.73 2.4 2.4 0 0 1-.73-1.77q0-1.042.73-1.77a2.4 2.4 0 0 1 1.77-.73 2.4 2.4 0 0 1 1.771.73 2.4 2.4 0 0 1 .73 1.77 2.4 2.4 0 0 1-.73 1.77 2.4 2.4 0 0 1-1.77.73"
      />
    </svg>
  );
};
export default SvgChatAltUnreadOutlined;
