import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFilterOff = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M15.896 18.25 1.729 4.104a.81.81 0 0 1-.25-.594q0-.344.25-.593a.81.81 0 0 1 .594-.25q.344 0 .594.25l14.166 14.166a.8.8 0 0 1 .25.584.8.8 0 0 1-.25.583.81.81 0 0 1-.593.25.81.81 0 0 1-.594-.25m-2.354-7.417a.84.84 0 0 1-.604-.24.8.8 0 0 1-.25-.593q0-.333.239-.583a.81.81 0 0 1 .615-.25h.625q.354 0 .593.24.24.239.24.593t-.24.594a.8.8 0 0 1-.593.24zM9.375 6.667a.84.84 0 0 1-.604-.24.8.8 0 0 1-.25-.594q0-.333.24-.583A.81.81 0 0 1 9.374 5h7.292q.354 0 .593.24.24.24.24.593 0 .354-.24.594a.8.8 0 0 1-.593.24zM9.167 15a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h1.666q.354 0 .594.24t.24.594-.24.593a.8.8 0 0 1-.594.24zm-3.334-4.167a.8.8 0 0 1-.593-.24A.8.8 0 0 1 5 10q0-.354.24-.594t.593-.24h2.625v1.667zm-2.5-4.166a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.594q0-.354.24-.593.24-.24.593-.24h.959v1.667z"
      />
    </svg>
  );
};
export default SvgFilterOff;
