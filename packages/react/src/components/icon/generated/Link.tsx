import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLink = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.833 14.167q-1.728 0-2.948-1.219Q1.667 11.73 1.667 10t1.218-2.948q1.22-1.219 2.948-1.219h2.5q.354 0 .594.24t.24.594-.24.593a.8.8 0 0 1-.594.24h-2.5a2.4 2.4 0 0 0-1.77.73 2.4 2.4 0 0 0-.73 1.77q0 1.042.73 1.77a2.4 2.4 0 0 0 1.77.73h2.5q.354 0 .594.24t.24.593-.24.594a.8.8 0 0 1-.594.24zM7.5 10.833a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h5q.354 0 .594.24t.24.594-.24.594a.8.8 0 0 1-.594.24zm4.167 3.334a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594q0-.354.24-.593.24-.24.594-.24h2.5q1.041 0 1.77-.73a2.4 2.4 0 0 0 .73-1.77 2.4 2.4 0 0 0-.73-1.77 2.4 2.4 0 0 0-1.77-.73h-2.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h2.5q1.728 0 2.948 1.22Q18.333 8.27 18.333 10t-1.218 2.948q-1.22 1.22-2.948 1.219z"
      />
    </svg>
  );
};
export default SvgLink;
