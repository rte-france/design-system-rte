import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFilterAltFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.167 16.667a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-5L3.5 4.667q-.313-.417-.094-.875.22-.459.76-.459h11.667q.542 0 .76.459.22.458-.093.875l-4.833 6.166v5q0 .355-.24.594a.8.8 0 0 1-.594.24z"
      />
    </svg>
  );
};
export default SvgFilterAltFilled;
