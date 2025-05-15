import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgForumOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M17.5 17.167a.8.8 0 0 1-.312-.063.9.9 0 0 1-.271-.187L15 15H6.667q-.688 0-1.177-.49A1.6 1.6 0 0 1 5 13.333V12.5h9.167q.687 0 1.177-.49.49-.489.49-1.177V5h.833q.687 0 1.177.49.49.489.49 1.177v9.646q0 .375-.25.614a.82.82 0 0 1-.584.24M3.333 10.146l.98-.98H12.5V3.334H3.333zM2.5 13a.82.82 0 0 1-.583-.24.81.81 0 0 1-.25-.614V3.333q0-.687.49-1.177.489-.49 1.176-.49H12.5q.687 0 1.177.49t.49 1.177v5.834q0 .687-.49 1.177t-1.177.49H5L3.083 12.75a.9.9 0 0 1-.27.188A.8.8 0 0 1 2.5 13"
      />
    </svg>
  );
};
export default SvgForumOutlined;
