import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgChatAltOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m5 15-1.917 1.917q-.395.396-.906.177-.51-.22-.51-.782V3.334q0-.687.49-1.177.489-.49 1.176-.49h13.334q.687 0 1.177.49t.49 1.177v10q0 .688-.49 1.177t-1.177.49zm-.708-1.667h12.375v-10H3.333v10.938zm1.541-1.666h5q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24h-5a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24m0-2.5h8.334q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24H5.833a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24m0-2.5h8.334q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24H5.833a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24"
      />
    </svg>
  );
};
export default SvgChatAltOutlined;
