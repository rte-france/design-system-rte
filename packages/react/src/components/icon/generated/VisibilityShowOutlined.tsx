import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgVisibilityShowOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 13.333q1.563 0 2.656-1.093 1.095-1.094 1.094-2.657t-1.094-2.656T10 5.833 7.344 6.927Q6.25 8.022 6.25 9.583q0 1.563 1.094 2.657Q8.437 13.333 10 13.333m0-1.5a2.17 2.17 0 0 1-1.594-.656 2.17 2.17 0 0 1-.656-1.594q0-.937.656-1.593A2.17 2.17 0 0 1 10 7.333a2.17 2.17 0 0 1 1.594.657q.656.656.656 1.593a2.17 2.17 0 0 1-.656 1.594 2.17 2.17 0 0 1-1.594.656m0 4q-2.791 0-5.094-1.5-2.301-1.5-3.635-3.958a1.59 1.59 0 0 1-.156-1.198q.051-.198.156-.385a10.8 10.8 0 0 1 3.635-3.959q2.303-1.5 5.094-1.5t5.094 1.5q2.301 1.5 3.635 3.959.105.187.156.385a1.6 1.6 0 0 1 0 .813q-.051.197-.156.385a10.8 10.8 0 0 1-3.635 3.958q-2.302 1.5-5.094 1.5m0-1.666q2.354 0 4.323-1.24a8.14 8.14 0 0 0 3.01-3.344 8.14 8.14 0 0 0-3.01-3.343A7.95 7.95 0 0 0 10 5Q7.646 5 5.677 6.24a8.14 8.14 0 0 0-3.01 3.343 8.14 8.14 0 0 0 3.01 3.344A7.95 7.95 0 0 0 10 14.167"
      />
    </svg>
  );
};
export default SvgVisibilityShowOutlined;
