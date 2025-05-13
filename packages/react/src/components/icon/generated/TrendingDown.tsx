import { IconProps } from '@design-system-rte/core/components/icon/icon.interface';
const SvgTrendingDown = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="m15.5 13.333-4.334-4.291-2.145 2.146q-.48.479-1.188.479c-.708 0-.868-.16-1.187-.48L2.25 6.75a.81.81 0 0 1-.24-.573.78.78 0 0 1 .24-.594.8.8 0 0 1 .583-.229.8.8 0 0 1 .583.23L7.833 10 9.98 7.854a1.6 1.6 0 0 1 1.187-.479q.709 0 1.188.48l4.312 4.312v-1.334q0-.354.24-.593.24-.24.594-.24c.354 0 .434.08.593.24q.24.24.24.593v3.334q0 .354-.24.593a.8.8 0 0 1-.593.24h-3.334a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.593-.24z"
      />
    </svg>
  );
};
export default SvgTrendingDown;
