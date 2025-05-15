import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFlagOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.833 11.667v5q0 .354-.24.593A.8.8 0 0 1 5 17.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593v-12.5q0-.354.24-.594T5 3.333h5.98a.8.8 0 0 1 .52.188q.23.188.292.479L12 5h3.833q.355 0 .594.24.24.24.24.593V12.5q0 .354-.24.594a.8.8 0 0 1-.594.24h-4.312a.8.8 0 0 1-.521-.188.83.83 0 0 1-.292-.48l-.208-1zm6.375 0H15v-5h-3.687a.8.8 0 0 1-.521-.188A.83.83 0 0 1 10.5 6l-.208-1H5.833v5h5.355a.8.8 0 0 1 .52.188q.23.186.292.479z"
      />
    </svg>
  );
};
export default SvgFlagOutlined;
