import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgDevicesOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M2.917 16.667q-.522 0-.886-.365a1.2 1.2 0 0 1-.365-.885q0-.522.365-.886.364-.364.886-.364h.416V5q0-.687.49-1.177T5 3.333h11.667q.354 0 .593.24.24.24.24.594t-.24.593a.8.8 0 0 1-.594.24H5v9.167h3.75q.52 0 .885.364t.365.886-.365.885a1.2 1.2 0 0 1-.885.365zm9.583 0a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594V7.5q0-.354.24-.594t.594-.24h5q.354 0 .594.24t.24.594v8.333q0 .354-.24.594a.8.8 0 0 1-.594.24zm.833-2.5h3.333V8.333h-3.333z"
      />
    </svg>
  );
};
export default SvgDevicesOutlined;
