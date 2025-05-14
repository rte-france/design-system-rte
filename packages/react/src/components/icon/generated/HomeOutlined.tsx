import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgHomeOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5 15.833h2.5v-4.166q0-.354.24-.594t.593-.24h3.334q.354 0 .594.24t.239.594v4.166H15v-7.5l-5-3.75-5 3.75zm-1.667 0v-7.5A1.66 1.66 0 0 1 4 7l5-3.75a1.6 1.6 0 0 1 1-.333q.562 0 1 .333L16 7a1.65 1.65 0 0 1 .667 1.333v7.5q0 .688-.49 1.177T15 17.5h-3.333a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V12.5H9.167v4.167q0 .354-.24.593a.8.8 0 0 1-.594.24H5q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177"
      />
    </svg>
  );
};
export default SvgHomeOutlined;
