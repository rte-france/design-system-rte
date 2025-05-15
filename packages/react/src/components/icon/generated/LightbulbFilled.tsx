import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLightbulbFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M10 18.333q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176h3.334q0 .687-.49 1.177t-1.177.49m-2.5-2.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h5q.354 0 .594.24t.24.594-.24.594a.8.8 0 0 1-.594.24zm-.625-2.5a6.4 6.4 0 0 1-2.281-2.291Q3.75 9.604 3.75 7.917q0-2.604 1.823-4.427Q7.395 1.666 10 1.667q2.604 0 4.427 1.823t1.823 4.427a6.06 6.06 0 0 1-.844 3.125 6.4 6.4 0 0 1-2.281 2.291z"
      />
    </svg>
  );
};
export default SvgLightbulbFilled;
