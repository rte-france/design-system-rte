import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgChartBar = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M14.167 16.667a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-4.166q0-.354.24-.594t.594-.24h1.667q.354 0 .593.24.24.24.24.594v4.166q0 .354-.24.594a.8.8 0 0 1-.593.24zm-5 0a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594V4.167q0-.354.24-.594t.594-.24h1.667q.354 0 .593.24.24.24.24.594v11.666q0 .354-.24.594a.8.8 0 0 1-.593.24zm-5 0a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-7.5q0-.354.24-.593.24-.24.594-.24h1.667q.354 0 .593.24.24.24.24.593v7.5q0 .354-.24.594a.8.8 0 0 1-.593.24z"
      />
    </svg>
  );
};
export default SvgChartBar;
