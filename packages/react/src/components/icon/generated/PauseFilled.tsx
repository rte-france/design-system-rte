import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPauseFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M13.333 15.833q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176V5.833q0-.687.49-1.177t1.177-.49 1.177.49.49 1.177v8.334q0 .687-.49 1.177-.489.49-1.177.49m-6.666 0q-.688 0-1.177-.49A1.6 1.6 0 0 1 5 14.168V5.833q0-.687.49-1.177.489-.49 1.177-.49.687 0 1.177.49t.49 1.177v8.334q0 .687-.49 1.177t-1.177.49"
      />
    </svg>
  );
};
export default SvgPauseFilled;
