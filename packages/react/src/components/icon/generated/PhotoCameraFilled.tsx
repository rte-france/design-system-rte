import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPhotoCameraFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 14.583q1.563 0 2.656-1.093 1.095-1.094 1.094-2.657t-1.094-2.656T10 7.083 7.344 8.177Q6.25 9.272 6.25 10.833q0 1.563 1.094 2.657Q8.437 14.583 10 14.583m0-1.666a2.01 2.01 0 0 1-1.48-.604 2.01 2.01 0 0 1-.603-1.48q0-.874.604-1.479A2.01 2.01 0 0 1 10 8.75q.874 0 1.48.604.603.604.603 1.48 0 .874-.604 1.479a2.01 2.01 0 0 1-1.479.604M3.333 17.5q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177v-10q0-.687.49-1.177t1.177-.49h2.625L7 3.043A1.67 1.67 0 0 1 8.23 2.5h3.54q.355 0 .678.146t.552.396l1.042 1.125h2.625q.687 0 1.177.49.49.489.49 1.176v10q0 .688-.49 1.177t-1.177.49z"
      />
    </svg>
  );
};
export default SvgPhotoCameraFilled;
