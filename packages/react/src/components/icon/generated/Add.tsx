import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgAdd = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M9.167 10.833H5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594T5 9.166h4.167V5q0-.354.24-.594.239-.24.593-.24c.354 0 .434.08.594.24q.24.24.24.594v4.167H15q.354 0 .594.24.24.239.24.593c0 .354-.08.434-.24.594a.8.8 0 0 1-.594.24h-4.167V15q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594z"
      />
    </svg>
  );
};
export default SvgAdd;
