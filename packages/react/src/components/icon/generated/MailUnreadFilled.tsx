import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgMailUnreadFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M15.833 6.667a2.4 2.4 0 0 1-1.77-.73 2.4 2.4 0 0 1-.73-1.77q0-1.042.73-1.771a2.4 2.4 0 0 1 1.77-.73 2.4 2.4 0 0 1 1.771.73 2.4 2.4 0 0 1 .73 1.77 2.4 2.4 0 0 1-.73 1.772 2.4 2.4 0 0 1-1.77.729m-12.5 10q-.687 0-1.177-.49A1.6 1.6 0 0 1 1.666 15V5q0-.687.49-1.177.491-.49 1.177-.49h7.584q.333 0 .552.25a.78.78 0 0 1 .198.584A4 4 0 0 0 11.75 5a4.26 4.26 0 0 0 1.292 2.25L10 9.167l-5.583-3.5a.645.645 0 0 0-.719-.021.68.68 0 0 0-.365.625q0 .188.084.344a.7.7 0 0 0 .25.26l5.896 3.688a.84.84 0 0 0 .437.124.84.84 0 0 0 .438-.124l3.958-2.48q.354.125.708.188t.73.062.75-.062a3.4 3.4 0 0 0 .729-.208.75.75 0 0 1 .687.041q.333.188.333.542V15q0 .687-.49 1.177-.489.49-1.176.49z"
      />
    </svg>
  );
};
export default SvgMailUnreadFilled;
