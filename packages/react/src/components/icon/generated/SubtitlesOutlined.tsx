import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgSubtitlesOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M3.333 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 1.666 15V5q0-.687.49-1.177.491-.49 1.177-.49h13.334q.687 0 1.177.49T18.334 5v10q0 .687-.49 1.177t-1.177.49zm0-1.667h13.334V5H3.333zm2.5-1.667h5q.354 0 .594-.24.24-.239.24-.593a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24h-5a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.594q0 .354.24.594t.593.24M9.167 10h5q.354 0 .594-.24t.24-.593a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24h-5a.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594q0 .354.24.593.24.24.594.24m-3.334 0q.355 0 .594-.24.24-.24.24-.593a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24.8.8 0 0 0-.593.24.8.8 0 0 0-.24.594q0 .354.24.593.24.24.593.24m8.334 3.333q.354 0 .594-.24.24-.239.24-.593a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594q0 .354.24.594t.594.24"
      />
    </svg>
  );
};
export default SvgSubtitlesOutlined;
