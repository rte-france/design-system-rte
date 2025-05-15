import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgAddCircleFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.167 10.833v2.5q0 .354.24.594.239.24.593.24t.594-.24q.24-.24.24-.594v-2.5h2.5q.353 0 .593-.24.24-.239.24-.593a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24h-2.5v-2.5a.8.8 0 0 0-.24-.593.8.8 0 0 0-.593-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594v2.5h-2.5a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.594.24zm.833 7.5a8.1 8.1 0 0 1-3.25-.656 8.4 8.4 0 0 1-2.646-1.781 8.4 8.4 0 0 1-1.781-2.646A8.1 8.1 0 0 1 1.667 10q0-1.73.656-3.25a8.4 8.4 0 0 1 1.781-2.646A8.4 8.4 0 0 1 6.75 2.323 8.1 8.1 0 0 1 10 1.667q1.73 0 3.25.656a8.4 8.4 0 0 1 2.646 1.781 8.4 8.4 0 0 1 1.781 2.646 8.1 8.1 0 0 1 .656 3.25 8.1 8.1 0 0 1-.656 3.25 8.4 8.4 0 0 1-1.781 2.646 8.4 8.4 0 0 1-2.646 1.781 8.1 8.1 0 0 1-3.25.656"
      />
    </svg>
  );
};
export default SvgAddCircleFilled;
