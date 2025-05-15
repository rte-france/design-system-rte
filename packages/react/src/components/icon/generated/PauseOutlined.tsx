import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPauseOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M12.5 15.833q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176V5.833q0-.687.49-1.177t1.177-.49h1.667q.687 0 1.177.49t.49 1.177v8.334q0 .687-.49 1.177t-1.177.49zm-6.667 0q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176V5.833q0-.687.49-1.177t1.177-.49H7.5q.687 0 1.177.49t.49 1.177v8.334q0 .687-.49 1.177t-1.177.49zm6.667-1.666h1.667V5.833H12.5zm-6.667 0H7.5V5.833H5.833z"
      />
    </svg>
  );
};
export default SvgPauseOutlined;
