import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFilter = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.167 15a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h1.666q.354 0 .594.24t.24.594c0 .354-.08.434-.24.593a.8.8 0 0 1-.594.24zm-3.334-4.167a.8.8 0 0 1-.593-.24A.8.8 0 0 1 5 10q0-.354.24-.594t.593-.24h8.334q.354 0 .593.24.24.24.24.594c0 .354-.08.434-.24.594a.8.8 0 0 1-.593.24zm-2.5-4.166a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.594q0-.354.24-.593.24-.24.593-.24h13.334q.354 0 .593.24.24.24.24.593c0 .353-.08.434-.24.594a.8.8 0 0 1-.593.24z"
      />
    </svg>
  );
};
export default SvgFilter;
