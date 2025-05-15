import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgChatAltUnreadFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M15.833 5a2.4 2.4 0 0 1-1.77-.73 2.4 2.4 0 0 1-.73-1.77q0-1.042.73-1.77a2.4 2.4 0 0 1 1.77-.73 2.4 2.4 0 0 1 1.771.73 2.4 2.4 0 0 1 .73 1.77 2.4 2.4 0 0 1-.73 1.77 2.4 2.4 0 0 1-1.77.73M5 15l-1.917 1.917q-.395.396-.906.177-.51-.22-.51-.782V3.334q0-.687.49-1.177.489-.49 1.176-.49h8.417a4.2 4.2 0 0 0 0 1.667q.105.48.292.896T12.5 5H5.833a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24h10q.667 0 1.313-.209.645-.208 1.187-.625v7.5q0 .688-.49 1.177-.489.49-1.176.49zm.833-5.833h8.334q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24H5.833a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24m0 2.5h5q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24h-5a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24"
      />
    </svg>
  );
};
export default SvgChatAltUnreadFilled;
