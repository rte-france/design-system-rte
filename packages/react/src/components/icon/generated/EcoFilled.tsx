import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgEcoFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.375 18.333q-.687 0-1.385-.156a9.4 9.4 0 0 1-1.428-.448q.25-2.52 1.459-4.708a14.3 14.3 0 0 1 3.104-3.854 13.2 13.2 0 0 0-3.969 3.083 10.9 10.9 0 0 0-2.343 4.375 2 2 0 0 1-.157-.135l-.156-.157a6.8 6.8 0 0 1-1.49-2.187 6.4 6.4 0 0 1-.51-2.521q0-1.416.563-2.708a7.4 7.4 0 0 1 1.562-2.292Q6.083 5.167 8.24 4.583q2.155-.583 5.823-.416.54.02 1 .24.458.218.812.572t.563.823q.208.47.25 1.01.125 3.75-.438 5.855-.563 2.103-2 3.541a7.4 7.4 0 0 1-2.281 1.573 6.4 6.4 0 0 1-2.594.552"
      />
    </svg>
  );
};
export default SvgEcoFilled;
