import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPlayOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M6.667 14.313V5.688a.8.8 0 0 1 .25-.594.82.82 0 0 1 .802-.209q.114.032.218.094l6.792 4.313a.8.8 0 0 1 .281.312.87.87 0 0 1 0 .792.8.8 0 0 1-.28.312l-6.793 4.313a.87.87 0 0 1-.437.125.82.82 0 0 1-.583-.24.8.8 0 0 1-.25-.594m1.666-1.521L12.708 10 8.333 7.208z"
      />
    </svg>
  );
};
export default SvgPlayOutlined;
