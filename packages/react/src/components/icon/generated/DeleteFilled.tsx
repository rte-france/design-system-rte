import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgDeleteFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.833 17.5q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V5a.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24H7.5q0-.354.24-.593.24-.24.593-.24h3.334q.354 0 .593.24.24.24.24.593h3.333q.354 0 .594.24t.24.594-.24.593a.8.8 0 0 1-.594.24v10.833q0 .688-.49 1.177-.489.49-1.176.49zm2.5-3.333q.354 0 .594-.24t.24-.594V7.5a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24.8.8 0 0 0-.593.24.8.8 0 0 0-.24.594v5.833q0 .354.24.594t.593.24m3.334 0q.354 0 .593-.24.24-.24.24-.594V7.5a.8.8 0 0 0-.24-.594.8.8 0 0 0-.593-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594v5.833q0 .354.24.594t.594.24"
      />
    </svg>
  );
};
export default SvgDeleteFilled;
