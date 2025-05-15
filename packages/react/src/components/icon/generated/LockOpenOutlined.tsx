import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLockOpenOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5 18.333q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176V8.333q0-.687.49-1.177T5 6.666h7.5V5q0-1.042-.73-1.77A2.4 2.4 0 0 0 10 2.5q-.875 0-1.531.531a2.6 2.6 0 0 0-.886 1.323.83.83 0 0 1-.343.469A1 1 0 0 1 6.667 5a.83.83 0 0 1-.594-.23.56.56 0 0 1-.177-.54q.291-1.44 1.437-2.418A3.98 3.98 0 0 1 10 .833q1.729 0 2.948 1.22Q14.166 3.27 14.167 5v1.667H15q.687 0 1.177.49.49.489.49 1.176v8.334q0 .687-.49 1.177t-1.177.49zm0-1.666h10V8.333H5zm5-2.5q.687 0 1.177-.49t.49-1.177-.49-1.177a1.6 1.6 0 0 0-1.177-.49q-.687 0-1.177.49t-.49 1.177.49 1.177 1.177.49"
      />
    </svg>
  );
};
export default SvgLockOpenOutlined;
