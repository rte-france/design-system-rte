import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPrintFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M6.667 17.5q-.688 0-1.177-.49A1.6 1.6 0 0 1 5 15.833v-1.666H3.333q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V9.167q0-1.063.73-1.782a2.43 2.43 0 0 1 1.77-.718h11.667q1.063 0 1.782.718.718.72.718 1.782V12.5q0 .687-.49 1.177-.489.49-1.176.49H15v1.666q0 .688-.49 1.177-.489.49-1.177.49zM15 5.833H5V4.167q0-.688.49-1.177.489-.49 1.177-.49h6.666q.688 0 1.177.49.49.489.49 1.177zm0 4.584q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.593q0 .354.24.594t.594.24m-8.333 5.416h6.666V12.5H6.667z"
      />
    </svg>
  );
};
export default SvgPrintFilled;
