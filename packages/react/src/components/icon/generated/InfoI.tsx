import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgInfoI = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 5.833q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176q0-.688.49-1.177T10 2.5t1.177.49q.49.489.49 1.177 0 .687-.49 1.177T10 5.834ZM10 17.5q-.52 0-.885-.365a1.2 1.2 0 0 1-.365-.885v-7.5q0-.52.365-.885C9.48 7.5 9.653 7.5 10 7.5s.642.122.885.365q.366.365.365.885v7.5q0 .52-.365.885A1.2 1.2 0 0 1 10 17.5"
      />
    </svg>
  );
};
export default SvgInfoI;
