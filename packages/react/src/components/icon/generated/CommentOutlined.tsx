import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgCommentOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M5.833 11.667h8.334q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24H5.833a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24m0-2.5h8.334q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24H5.833a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24m0-2.5h8.334q.354 0 .594-.24t.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24H5.833a.8.8 0 0 0-.593.24.8.8 0 0 0-.24.593q0 .354.24.594t.593.24M3.333 15q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177v-10q0-.687.49-1.177.491-.49 1.177-.49h13.334q.687 0 1.177.49t.49 1.177v12.98q0 .563-.511.78-.51.22-.906-.176L15 15zm12.375-1.667.959.938V3.333H3.333v10z"
      />
    </svg>
  );
};
export default SvgCommentOutlined;
