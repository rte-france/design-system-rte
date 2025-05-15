import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLocationMeOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.167 18.292v-.834q-2.604-.291-4.47-2.156-1.863-1.865-2.155-4.469h-.834a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.593-.24h.834q.291-2.603 2.156-4.468t4.469-2.156v-.834q0-.354.24-.593.239-.24.593-.24t.594.24.24.593v.834q2.603.291 4.468 2.156t2.156 4.469h.834q.354 0 .593.24.24.239.24.593t-.24.594a.8.8 0 0 1-.593.24h-.834q-.291 2.603-2.156 4.468t-4.469 2.156v.834q0 .354-.24.593a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593M10 15.833q2.416 0 4.125-1.708 1.708-1.709 1.708-4.125t-1.708-4.125T10 4.167 5.875 5.875Q4.167 7.584 4.167 10t1.708 4.125T10 15.833m0-2.5a3.2 3.2 0 0 1-2.354-.979A3.2 3.2 0 0 1 6.666 10q0-1.375.98-2.354A3.2 3.2 0 0 1 10 6.666a3.2 3.2 0 0 1 2.354.98 3.2 3.2 0 0 1 .98 2.354 3.2 3.2 0 0 1-.98 2.354 3.2 3.2 0 0 1-2.354.98m0-1.666q.687 0 1.177-.49t.49-1.177-.49-1.177A1.6 1.6 0 0 0 10 8.333q-.687 0-1.177.49T8.333 10t.49 1.177 1.177.49"
      />
    </svg>
  );
};
export default SvgLocationMeOutlined;
