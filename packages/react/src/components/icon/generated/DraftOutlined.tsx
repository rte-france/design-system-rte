import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgDraftOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5 18.333q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.176V3.333q0-.687.49-1.177T5 1.666h5.98a1.65 1.65 0 0 1 1.166.48l4.041 4.042q.23.229.355.53.125.303.125.636v9.313q0 .687-.49 1.177t-1.177.49zm5.833-11.666V3.333H5v13.334h10V7.5h-3.333a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593"
      />
    </svg>
  );
};
export default SvgDraftOutlined;
