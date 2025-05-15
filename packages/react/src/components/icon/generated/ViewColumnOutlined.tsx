import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgViewColumnOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M2.521 14.167V5.833q0-.687.49-1.177.489-.49 1.177-.49h11.646q.687 0 1.177.49t.49 1.177v8.334q0 .687-.49 1.177-.491.49-1.177.49H4.188q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177m1.646 0h2.77V5.833h-2.77zm4.437 0h2.771V5.833h-2.77zm4.438 0h2.77V5.833h-2.77z"
      />
    </svg>
  );
};
export default SvgViewColumnOutlined;
