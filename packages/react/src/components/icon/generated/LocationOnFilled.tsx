import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLocationOnFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 17.77q-.291 0-.583-.103a1.5 1.5 0 0 1-.521-.313A33 33 0 0 1 6.5 14.917a18 18 0 0 1-1.74-2.302 11 11 0 0 1-1.062-2.146Q3.333 9.437 3.333 8.5q0-3.125 2.01-4.98Q7.355 1.668 10 1.668t4.656 1.854q2.01 1.854 2.01 4.979.001.937-.364 1.969a11 11 0 0 1-1.062 2.146 18 18 0 0 1-1.74 2.302 33 33 0 0 1-2.396 2.437 1.5 1.5 0 0 1-.52.313q-.293.105-.584.104M10 10q.688 0 1.177-.49.49-.489.49-1.177 0-.687-.49-1.177A1.6 1.6 0 0 0 10 6.666q-.687 0-1.177.49t-.49 1.177.49 1.177T10 10"
      />
    </svg>
  );
};
export default SvgLocationOnFilled;
