import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgOhm = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 4.167q-1.917 0-3.25 1.333T5.417 8.75q0 1.312.687 2.417a4.5 4.5 0 0 0 1.875 1.687q.5.25.844.677.345.428.344.969v1.75q0 .52-.365.885a1.2 1.2 0 0 1-.885.365H3.75q-.52 0-.885-.365a1.2 1.2 0 0 1-.365-.885q0-.52.365-.885.365-.366.885-.365h2.917a7 7 0 0 1-2.75-2.604 6.96 6.96 0 0 1-1-3.646q0-2.958 2.062-5.02Q7.042 1.666 10 1.666q2.959 0 5.02 2.062 2.063 2.063 2.063 5.021 0 1.98-1 3.646A7 7 0 0 1 13.333 15h2.917q.52 0 .885.365.365.364.365.885 0 .52-.365.885a1.2 1.2 0 0 1-.885.365h-4.167q-.52 0-.885-.365a1.2 1.2 0 0 1-.365-.885V14.5q0-.541.344-.969t.844-.677a4.5 4.5 0 0 0 1.875-1.687 4.5 4.5 0 0 0 .687-2.417q0-1.917-1.333-3.25T10 4.167"
      />
    </svg>
  );
};
export default SvgOhm;
