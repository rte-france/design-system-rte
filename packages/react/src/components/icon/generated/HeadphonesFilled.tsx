import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgHeadphonesFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.833 17.5H4.167q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V10q0-1.562.594-2.927.593-1.365 1.604-2.375a7.6 7.6 0 0 1 2.375-1.604A7.3 7.3 0 0 1 10 2.5q1.563 0 2.927.594 1.365.593 2.375 1.604a7.6 7.6 0 0 1 1.604 2.375Q17.5 8.437 17.5 10v5.833q0 .688-.49 1.177-.489.49-1.177.49h-1.666q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V12.5q0-.687.49-1.177.489-.49 1.177-.49h1.666V10q0-2.437-1.698-4.135T10 4.167 5.865 5.865 4.167 10v.833h1.666q.688 0 1.177.49T7.5 12.5v3.333q0 .688-.49 1.177-.489.49-1.177.49"
      />
    </svg>
  );
};
export default SvgHeadphonesFilled;
