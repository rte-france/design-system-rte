import { IconProps as coreIconProps } from '@design-system-rte/core/components/icon/icon.interface';
interface IconProps extends coreIconProps {
  className?: string;
}
const SvgFolderAddOutlined = ({ width = 20, height = 20, fill = 'currentColor', ...props }: IconProps) => {
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
        d="M3.333 16.667q-.687 0-1.177-.49A1.6 1.6 0 0 1 1.666 15V5q0-.687.49-1.177t1.177-.49h4.313a1.65 1.65 0 0 1 1.166.48L10 5h6.666q.688 0 1.178.49.49.489.49 1.177V15q0 .687-.49 1.177t-1.178.49zm0-1.667h13.334V6.667H9.311L7.646 5H3.333zm8.334-3.333v.833q0 .354.24.594.239.24.593.24t.594-.24.24-.594v-.833h.832q.355 0 .594-.24.24-.24.24-.594a.8.8 0 0 0-.24-.593.8.8 0 0 0-.594-.24h-.833v-.833a.8.8 0 0 0-.24-.594.8.8 0 0 0-.593-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594V10h-.833a.8.8 0 0 0-.594.24.8.8 0 0 0-.24.593q0 .354.24.594t.594.24z"
      />
    </svg>
  );
};
export default SvgFolderAddOutlined;
