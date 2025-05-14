import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgRoute = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M7.5 17.5a3.2 3.2 0 0 1-2.354-.98 3.2 3.2 0 0 1-.98-2.353V7.354a2.58 2.58 0 0 1-1.197-.906A2.38 2.38 0 0 1 2.5 5q0-1.042.73-1.77A2.4 2.4 0 0 1 5 2.5a2.4 2.4 0 0 1 1.77.73A2.4 2.4 0 0 1 7.5 5q0 .812-.469 1.448a2.58 2.58 0 0 1-1.198.906v6.813q0 .687.49 1.177t1.177.49 1.177-.49.49-1.177V5.833q0-1.374.979-2.354A3.2 3.2 0 0 1 12.5 2.5a3.2 3.2 0 0 1 2.354.98 3.2 3.2 0 0 1 .98 2.353v6.813q.728.27 1.197.906T17.5 15q0 1.042-.73 1.77a2.4 2.4 0 0 1-1.77.73 2.4 2.4 0 0 1-1.77-.73A2.4 2.4 0 0 1 12.5 15q0-.813.469-1.458.468-.646 1.198-.896V5.833q0-.687-.49-1.177a1.6 1.6 0 0 0-1.177-.49q-.687 0-1.177.49t-.49 1.177v8.334a3.2 3.2 0 0 1-.979 2.354A3.2 3.2 0 0 1 7.5 17.5"
      />
    </svg>
  );
};
export default SvgRoute;
