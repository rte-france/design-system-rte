import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgPowerOffOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M8.75 17.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V15L5.48 12.563A1.645 1.645 0 0 1 5 11.396V7.5q.002-.5.23-.937.23-.438.667-.667L7.5 7.5h-.833v3.875l2.917 2.917v1.541h.833v-1.541l.77-.771L1.75 4.083a.8.8 0 0 1-.229-.583.8.8 0 0 1 .23-.583.8.8 0 0 1 .583-.23.8.8 0 0 1 .583.23l14.167 14.166a.8.8 0 0 1 .229.584.8.8 0 0 1-.23.583.8.8 0 0 1-.583.23.8.8 0 0 1-.583-.23l-3.542-3.542-.291.292v1.667q0 .354-.24.593a.8.8 0 0 1-.594.24zm5.542-5.583-.958-.959V7.5H9.875L6.667 4.292v-.959q0-.354.24-.593.24-.24.593-.24.354 0 .594.24t.24.593v2.5h3.333v-2.5q0-.354.24-.593.24-.24.593-.24.354 0 .594.24t.24.593v3.334l-.834-.834h.834q.687 0 1.177.49T15 7.5v3.02a1.65 1.65 0 0 1-.48 1.168z"
      />
    </svg>
  );
};
export default SvgPowerOffOutlined;
