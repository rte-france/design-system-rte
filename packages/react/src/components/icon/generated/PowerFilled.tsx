import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPowerFilled = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M7.917 16.667V15l-2.438-2.437A1.645 1.645 0 0 1 5 11.396V7.5q.001-.687.49-1.177.49-.49 1.178-.49H7.5l-.833.834V3.333q0-.354.24-.593.239-.24.593-.24t.594.24.24.593v2.5h3.333v-2.5q0-.354.24-.593.239-.24.593-.24t.594.24.24.593v3.334l-.834-.834h.833q.688 0 1.177.49T15 7.5v3.896a1.65 1.65 0 0 1-.48 1.166L12.084 15v1.667q0 .354-.24.593a.8.8 0 0 1-.593.24h-2.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593"
      />
    </svg>
  );
};
export default SvgPowerFilled;
