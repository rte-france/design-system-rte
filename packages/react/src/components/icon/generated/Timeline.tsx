import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgTimeline = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M2.5 15q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177q0-.687.49-1.177t1.177-.49h.219q.093 0 .198.042l3.791-3.791a.5.5 0 0 1-.041-.198V7.5q0-.687.49-1.177.489-.49 1.176-.49.688 0 1.177.49T10 7.5q0 .042-.042.417l2.125 2.125a.5.5 0 0 1 .198-.042h.438q.093 0 .198.042l2.958-2.959a.5.5 0 0 1-.042-.198v-.218q0-.688.49-1.177T17.5 5q.687 0 1.177.49.49.489.49 1.177 0 .687-.49 1.177t-1.177.49h-.219a.5.5 0 0 1-.198-.042l-2.958 2.958a.5.5 0 0 1 .042.198v.219q0 .687-.49 1.177t-1.177.49-1.177-.49a1.6 1.6 0 0 1-.49-1.177v-.22q0-.093.042-.197L8.75 9.125a.5.5 0 0 1-.198.042h-.219q-.042 0-.416-.042l-3.792 3.792a.5.5 0 0 1 .042.198v.218q0 .688-.49 1.177T2.5 15"
      />
    </svg>
  );
};
export default SvgTimeline;
