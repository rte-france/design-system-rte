import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPublic = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 18.333a8.1 8.1 0 0 1-3.25-.656 8.4 8.4 0 0 1-2.646-1.781 8.4 8.4 0 0 1-1.781-2.646A8.1 8.1 0 0 1 1.667 10q0-1.73.656-3.25a8.4 8.4 0 0 1 1.781-2.646A8.4 8.4 0 0 1 6.75 2.323 8.1 8.1 0 0 1 10 1.667q1.73 0 3.25.656a8.4 8.4 0 0 1 2.646 1.781 8.4 8.4 0 0 1 1.78 2.646 8.1 8.1 0 0 1 .657 3.25 8.1 8.1 0 0 1-.656 3.25 8.4 8.4 0 0 1-1.781 2.646 8.4 8.4 0 0 1-2.646 1.781 8.1 8.1 0 0 1-3.25.656m-.834-1.708V15q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V12.5l-4-4q-.06.375-.114.75-.051.375-.052.75 0 2.52 1.656 4.417 1.657 1.896 4.177 2.208m5.75-2.125a6.7 6.7 0 0 0 1.303-2.094q.447-1.156.447-2.406a6.54 6.54 0 0 0-1.135-3.73A6.4 6.4 0 0 0 12.5 3.834v.334q0 .687-.49 1.177t-1.177.49H9.166V7.5q0 .354-.24.594a.8.8 0 0 1-.593.24H6.666V10h5q.355 0 .594.24.24.24.24.593v2.5h.833q.542 0 .98.323t.603.844"
      />
    </svg>
  );
};
export default SvgPublic;
