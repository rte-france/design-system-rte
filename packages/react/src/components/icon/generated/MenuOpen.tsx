import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgMenuOpen = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M3.333 15a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.593-.24H12.5q.354 0 .594.24t.24.594c0 .354-.08.434-.24.593a.8.8 0 0 1-.594.24zm12.417-1.417-3-3A.8.8 0 0 1 12.5 10a.8.8 0 0 1 .25-.583l3-3a.8.8 0 0 1 .583-.23.8.8 0 0 1 .584.23.8.8 0 0 1 .229.583.8.8 0 0 1-.23.583L14.5 10l2.417 2.417a.8.8 0 0 1 .229.583.8.8 0 0 1-.23.583.8.8 0 0 1-.583.23.8.8 0 0 1-.583-.23m-12.417-2.75a.8.8 0 0 1-.593-.24A.8.8 0 0 1 2.5 10q0-.354.24-.594t.593-.24H10q.354 0 .594.24t.24.594c0 .354-.08.434-.24.594a.8.8 0 0 1-.594.24zm0-4.166a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.594q0-.354.24-.593.24-.24.593-.24H12.5q.354 0 .594.24t.24.593c0 .353-.08.434-.24.594a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgMenuOpen;
