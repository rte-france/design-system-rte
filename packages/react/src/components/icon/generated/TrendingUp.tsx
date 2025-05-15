import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgTrendingUp = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M2.25 14.688a.78.78 0 0 1-.24-.594.81.81 0 0 1 .24-.573l4.396-4.459q.48-.479 1.187-.479.709 0 1.188.48l2.146 2.166L15.5 6.937h-1.333a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24H17.5q.354 0 .594.24t.24.594v3.333q0 .355-.24.594a.8.8 0 0 1-.594.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594V8.104l-4.312 4.313q-.48.48-1.187.479-.709 0-1.188-.48l-2.146-2.145-4.416 4.416a.8.8 0 0 1-.584.23.8.8 0 0 1-.583-.23"
      />
    </svg>
  );
};
export default SvgTrendingUp;
