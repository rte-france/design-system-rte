import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgWarningOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M2.27 17.5a.811.811 0 0 1-.708-.417.9.9 0 0 1-.114-.406.75.75 0 0 1 .115-.427L9.27 2.917a.8.8 0 0 1 .323-.313A.86.86 0 0 1 10 2.5q.208 0 .406.104a.8.8 0 0 1 .323.313l7.709 13.333a.75.75 0 0 1 .114.427.9.9 0 0 1-.114.406.81.81 0 0 1-.709.417zm1.438-1.667h12.584L10 5zM10 15q.354 0 .594-.24t.24-.593a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594q0 .354.24.593.24.24.594.24m0-2.5q.354 0 .594-.24t.24-.593v-2.5a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594v2.5q0 .354.24.593.24.24.594.24"
      />
    </svg>
  );
};
export default SvgWarningOutlined;
