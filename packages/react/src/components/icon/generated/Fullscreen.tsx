import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFullscreen = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 15.833h1.666q.354 0 .594.24t.24.594c0 .354-.08.434-.24.593a.8.8 0 0 1-.594.24h-2.5a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593v-2.5q0-.354.24-.594t.593-.24c.353 0 .434.08.594.24q.24.24.24.594zm11.666 0v-1.666q0-.354.24-.594t.594-.24c.354 0 .434.08.593.24q.24.24.24.594v2.5q0 .354-.24.593a.8.8 0 0 1-.593.24h-2.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24zM4.167 4.167v1.666q0 .354-.24.594a.8.8 0 0 1-.594.24.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.594v-2.5q0-.354.24-.593.24-.24.593-.24h2.5q.354 0 .594.24t.24.593c0 .353-.08.434-.24.594a.8.8 0 0 1-.594.24zm11.666 0h-1.666a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594q0-.354.24-.593.24-.24.594-.24h2.5q.354 0 .593.24.24.24.24.593v2.5q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594z"
      />
    </svg>
  );
};
export default SvgFullscreen;
