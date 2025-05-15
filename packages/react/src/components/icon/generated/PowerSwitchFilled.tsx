import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPowerSwitchFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M12.5 14.167q.354 0 .594-.24t.24-.594V6.667a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24h-5a.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594v6.666q0 .354.24.594t.594.24zM8.333 12.5v-5h3.334v5zm-4.166 5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V4.167q0-.688.49-1.177.489-.49 1.177-.49h11.666q.688 0 1.177.49.49.489.49 1.177v11.666q0 .688-.49 1.177-.489.49-1.177.49zM10 10q.354 0 .594-.24t.24-.593a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594q0 .354.24.593.24.24.594.24"
      />
    </svg>
  );
};
export default SvgPowerSwitchFilled;
