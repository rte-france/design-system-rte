import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgLastPage = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M8.5 10 5.25 6.75a.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.584.8.8 0 0 1 .583-.229.8.8 0 0 1 .584.23l3.833 3.833a.7.7 0 0 1 .177.27.9.9 0 0 1 .052.313.9.9 0 0 1-.052.313.7.7 0 0 1-.177.27l-3.833 3.834a.8.8 0 0 1-.584.229.8.8 0 0 1-.583-.23.8.8 0 0 1-.23-.583.8.8 0 0 1 .23-.583zm5.667-5q.354 0 .594.24t.239.593v8.334q0 .354-.24.593a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V5.833q0-.354.24-.593.24-.24.594-.24"
      />
    </svg>
  );
};
export default SvgLastPage;
