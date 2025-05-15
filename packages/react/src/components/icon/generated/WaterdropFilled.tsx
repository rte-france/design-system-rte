import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgWaterdropFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 18.333q-2.855 0-4.76-1.958-1.907-1.958-1.907-4.875 0-1.291.584-2.583.583-1.292 1.458-2.48a21 21 0 0 1 1.896-2.229 36 36 0 0 1 1.896-1.812 1 1 0 0 1 .385-.24 1.4 1.4 0 0 1 .896 0 1 1 0 0 1 .386.24 36 36 0 0 1 1.895 1.812q1.02 1.042 1.896 2.23t1.459 2.479q.582 1.29.583 2.583 0 2.917-1.906 4.875-1.907 1.958-4.76 1.958m.23-2.5a.66.66 0 0 0 .426-.198.58.58 0 0 0 .178-.427.61.61 0 0 0-.188-.468.6.6 0 0 0-.48-.157q-.854.063-1.812-.468-.958-.532-1.208-1.928a.6.6 0 0 0-.219-.374.62.62 0 0 0-.406-.146.6.6 0 0 0-.48.218.56.56 0 0 0-.124.51q.354 1.897 1.667 2.71 1.312.811 2.645.728"
      />
    </svg>
  );
};
export default SvgWaterdropFilled;
