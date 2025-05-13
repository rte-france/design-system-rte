import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgMoreVert = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 8.333 15q0-.687.49-1.177t1.177-.49 1.177.49.49 1.177-.49 1.177-1.177.49m0-5q-.687 0-1.177-.49A1.6 1.6 0 0 1 8.333 10q0-.687.49-1.177T10 8.333t1.177.49.49 1.177-.49 1.177-1.177.49m0-5q-.687 0-1.177-.49A1.6 1.6 0 0 1 8.333 5q0-.687.49-1.177T10 3.333t1.177.49.49 1.177-.49 1.177-1.177.49"
      />
    </svg>
  );
};
export default SvgMoreVert;
