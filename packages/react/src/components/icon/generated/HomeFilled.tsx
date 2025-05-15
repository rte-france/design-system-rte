import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgHomeFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M3.333 15.833v-7.5A1.66 1.66 0 0 1 4 7l5-3.75a1.6 1.6 0 0 1 1-.333q.562 0 1 .333L16 7q.313.23.49.583.177.354.177.75v7.5q0 .688-.49 1.177T15 17.5h-2.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V12.5a.8.8 0 0 0-.239-.594.8.8 0 0 0-.594-.24H9.167a.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594v4.167q0 .354-.24.593a.8.8 0 0 1-.593.24H5q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177"
      />
    </svg>
  );
};
export default SvgHomeFilled;
