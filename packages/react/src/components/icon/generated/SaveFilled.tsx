import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgSaveFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M4.167 17.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h9.312a1.65 1.65 0 0 1 1.167.48l2.375 2.374q.229.23.354.531.125.303.125.636v9.312q0 .688-.49 1.177-.489.49-1.177.49zM10 15q1.042 0 1.77-.73.73-.728.73-1.77t-.73-1.77A2.4 2.4 0 0 0 10 10q-1.042 0-1.77.73a2.4 2.4 0 0 0-.73 1.77q0 1.042.73 1.77.728.73 1.77.73M5.833 8.333h5.834q.354 0 .593-.24.24-.239.24-.593V5.833a.8.8 0 0 0-.24-.593.8.8 0 0 0-.593-.24H5.833a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593V7.5q0 .354.24.594t.593.24"
      />
    </svg>
  );
};
export default SvgSaveFilled;
