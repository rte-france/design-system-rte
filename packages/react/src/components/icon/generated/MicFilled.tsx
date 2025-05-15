import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgMicFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 11.667a2.4 2.4 0 0 1-1.77-.73 2.4 2.4 0 0 1-.73-1.77v-5q0-1.042.73-1.771a2.4 2.4 0 0 1 1.77-.73q1.042 0 1.77.73a2.4 2.4 0 0 1 .73 1.77v5a2.4 2.4 0 0 1-.73 1.771 2.4 2.4 0 0 1-1.77.73m-.833 5v-1.73a5.67 5.67 0 0 1-3.282-1.624Q4.521 11.959 4.23 10.02a.73.73 0 0 1 .188-.604.76.76 0 0 1 .583-.25q.354 0 .594.24.24.239.323.593.291 1.457 1.448 2.396a4.07 4.07 0 0 0 2.635.937q1.5 0 2.646-.948A4.06 4.06 0 0 0 14.083 10q.084-.354.323-.594.24-.24.594-.24t.583.25a.73.73 0 0 1 .188.605 5.8 5.8 0 0 1-1.646 3.27 5.58 5.58 0 0 1-3.292 1.646v1.73q0 .354-.24.593a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593"
      />
    </svg>
  );
};
export default SvgMicFilled;
