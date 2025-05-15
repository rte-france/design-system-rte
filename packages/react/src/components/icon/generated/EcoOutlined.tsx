import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgEcoOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.5 16.333a6.9 6.9 0 0 1-1.469-2.166 6.3 6.3 0 0 1-.531-2.542q0-1.313.5-2.594t1.625-2.406q1.25-1.25 3.531-1.896t5.906-.542q.543.02 1 .23a2.75 2.75 0 0 1 1.376 1.385q.207.47.229 1.01a27 27 0 0 1-.094 3.157q-.135 1.448-.438 2.614a10 10 0 0 1-.77 2.073 6.2 6.2 0 0 1-1.115 1.552q-1.104 1.105-2.344 1.615t-2.531.51a6.9 6.9 0 0 1-2.646-.53 6.7 6.7 0 0 1-2.229-1.47M6.833 16q.604.354 1.24.51t1.302.157q.958 0 1.896-.386.937-.385 1.791-1.24.376-.375.76-1.051.386-.678.668-1.771.281-1.094.427-2.646t.041-3.698a48 48 0 0 0-2.302-.031q-1.281.01-2.552.198a12.3 12.3 0 0 0-2.416.604q-1.147.417-1.875 1.146-.938.938-1.292 1.854a4.9 4.9 0 0 0-.354 1.77q0 1.23.468 2.157.47.927.823 1.302.875-1.666 2.313-3.198a12.1 12.1 0 0 1 3.354-2.51q-1.5 1.312-2.615 2.968Q7.395 13.792 6.833 16"
      />
    </svg>
  );
};
export default SvgEcoOutlined;
